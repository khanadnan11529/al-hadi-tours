package com.alhadi.tours.controller;

import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.alhadi.tours.entity.Enquiry;
import com.alhadi.tours.service.EnquiryService;

@RestController
@RequestMapping("/api/enquiries")
@CrossOrigin(origins = "http://localhost:5173")
public class EnquiryController {

    private final EnquiryService enquiryService;

    public EnquiryController(EnquiryService enquiryService) {
        this.enquiryService = enquiryService;
    }

    @PostMapping
    public ResponseEntity<Enquiry> createEnquiry(
            @RequestBody Enquiry enquiry) {

        Enquiry savedEnquiry = enquiryService.saveEnquiry(enquiry);

        return new ResponseEntity<>(savedEnquiry, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Enquiry>> getAllEnquiries() {

        return ResponseEntity.ok(
                enquiryService.getAllEnquiries()
        );
    }

    @PutMapping("/{id}/status")
    public ResponseEntity<Enquiry> updateStatus(
            @PathVariable Long id,
            @RequestBody Map<String, String> request) {

        String status = request.get("status");

        Enquiry updatedEnquiry =
                enquiryService.updateStatus(id, status);

        if (updatedEnquiry == null) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(updatedEnquiry);
    }
    
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEnquiry(@PathVariable Long id) {

        enquiryService.deleteEnquiry(id);

        return ResponseEntity.noContent().build();
    }
}