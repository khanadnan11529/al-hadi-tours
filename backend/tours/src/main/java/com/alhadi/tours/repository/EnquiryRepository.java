package com.alhadi.tours.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.alhadi.tours.entity.Enquiry;

public interface EnquiryRepository extends JpaRepository<Enquiry, Long> {

}