package com.estate.demo.service.implementation;

import com.estate.demo.model.ContactForm;
import com.estate.demo.repository.ContactFormRepository;
import com.estate.demo.service.ContactFormService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ContactFormServiceImplementation implements ContactFormService {

    private ContactFormRepository contactFormRepository;

    @Autowired
    public ContactFormServiceImplementation(ContactFormRepository contactFormRepository) {
        this.contactFormRepository = contactFormRepository;
    }

    @Override
    public ContactForm addNewContactForm(ContactForm contactForm) {
        contactFormRepository.save(contactForm);
        return contactForm;
    }

    @Override
    public List<ContactForm> getContactForms() {
        return contactFormRepository.findAll();
    }

    @Override
    public Optional<ContactForm> getContactFormById(Long id) {
        return contactFormRepository.findById(id);
    }

    @Override
    public void deleteContactForm(Long id) {
        contactFormRepository.deleteById(id);
    }
}
