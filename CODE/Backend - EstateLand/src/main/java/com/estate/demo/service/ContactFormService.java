package com.estate.demo.service;

import com.estate.demo.model.ContactForm;

import java.util.List;
import java.util.Optional;

public interface ContactFormService {

    ContactForm addNewContactForm(ContactForm contactForm);

    List<ContactForm> getContactForms();

    Optional<ContactForm> getContactFormById(Long id);

    void deleteContactForm(Long id);
}
