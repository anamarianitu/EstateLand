package com.estate.demo.controller;

import com.estate.demo.model.ContactForm;
import com.estate.demo.model.HttpResponse;
import com.estate.demo.service.ContactFormService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

import static org.springframework.http.HttpStatus.NO_CONTENT;
import static org.springframework.http.HttpStatus.OK;

@RestController
@RequestMapping(path = { "/", "/contact"})
public class ContactFormResource {

    private static final String CONTACT_FORM_DELETED_SUCCESSFULLY = "Contact form deleted successfully!";
    private ContactFormService contactFormService;

    @Autowired
    public ContactFormResource(ContactFormService contactFormService) {
        this.contactFormService = contactFormService;
    }

    @PostMapping({"/addContactForm"})
    public ContactForm addNewContactForm(@RequestBody ContactForm contactForm) {
        return contactFormService.addNewContactForm(contactForm);
    }

    @GetMapping("/allContactForms")
    public ResponseEntity<List<ContactForm>> getAllContactForms(){
        List<ContactForm> contactForms = contactFormService.getContactForms();
        return new ResponseEntity<>(contactForms, OK);
    }

    @GetMapping("{id}")
    public ResponseEntity<Optional<ContactForm>> getContactFormPath(@PathVariable(value = "id") Long id) {
        Optional<ContactForm> contactForm = contactFormService.getContactFormById(id);

        if(contactForm != null) {
            return ResponseEntity.ok().body(contactForm);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/delete/{id}")
    @PreAuthorize("hasAnyAuthority('user:delete')")
    public ResponseEntity<HttpResponse> deleteContactForm(@PathVariable("id") Long id){
        contactFormService.deleteContactForm(id);
        return response(NO_CONTENT, CONTACT_FORM_DELETED_SUCCESSFULLY);
    }

    private ResponseEntity<HttpResponse> response(HttpStatus httpStatus, String message) {
        return new ResponseEntity<>(new HttpResponse(httpStatus.value(), httpStatus, httpStatus.getReasonPhrase().toUpperCase(),
                message.toUpperCase()), httpStatus);
    }
}
