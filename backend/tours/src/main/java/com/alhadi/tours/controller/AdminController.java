package com.alhadi.tours.controller;

import com.alhadi.tours.security.JwtService;


import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.alhadi.tours.entity.Admin;
import com.alhadi.tours.service.AdminService;
import org.springframework.security.crypto.password.PasswordEncoder;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin(origins = "http://localhost:5173")
public class AdminController {

	private final AdminService adminService;

	private final PasswordEncoder passwordEncoder;

	private final JwtService jwtService;

	public AdminController(
	        AdminService adminService,
	        PasswordEncoder passwordEncoder,
	        JwtService jwtService) {

	    this.adminService = adminService;
	    this.passwordEncoder = passwordEncoder;
	    this.jwtService = jwtService;
	}

	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody Admin loginRequest) {

		Optional<Admin> adminOptional = adminService.findByUsername(loginRequest.getUsername());

		if (adminOptional.isPresent()) {

			Admin admin = adminOptional.get();

			if (passwordEncoder.matches(loginRequest.getPassword(), admin.getPassword())) {

				String token = jwtService.generateToken(admin.getUsername());

				return ResponseEntity.ok(token);
			}
		}

		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
	}
	
	
	
}