package com.alhadi.tours.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.alhadi.tours.entity.Admin;

public interface AdminRepository extends JpaRepository<Admin, Long> {

    Optional<Admin> findByUsername(String username);
}