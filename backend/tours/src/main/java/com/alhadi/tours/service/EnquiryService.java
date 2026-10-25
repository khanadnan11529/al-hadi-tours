package com.alhadi.tours.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.alhadi.tours.entity.Enquiry;
import com.alhadi.tours.repository.EnquiryRepository;

@Service
public class EnquiryService {

    private final EnquiryRepository enquiryRepository;

    public EnquiryService(EnquiryRepository enquiryRepository) {
        this.enquiryRepository = enquiryRepository;
    }

    public Enquiry saveEnquiry(Enquiry enquiry) {

        if (enquiry.getStatus() == null || enquiry.getStatus().isBlank()) {
            enquiry.setStatus("NEW");
        }

        return enquiryRepository.save(enquiry);
    }

    public List<Enquiry> getAllEnquiries() {
        return enquiryRepository.findAll();
    }

    public Enquiry updateStatus(Long id, String status) {

        Optional<Enquiry> optionalEnquiry = enquiryRepository.findById(id);

        if (optionalEnquiry.isPresent()) {

            Enquiry enquiry = optionalEnquiry.get();

            enquiry.setStatus(status);

            return enquiryRepository.save(enquiry);
        }

        return null;
    }
    
    public void deleteEnquiry(Long id) {
        enquiryRepository.deleteById(id);
    }
}