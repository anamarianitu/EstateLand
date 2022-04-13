package com.estate.demo.repository;

import com.estate.demo.model.ContactForm;
import org.junit.Assert;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;

import javax.transaction.Transactional;
import java.util.Arrays;

import static org.mockito.Mockito.*;

@RunWith(SpringRunner.class)
@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@ActiveProfiles(value = "test")
public class ContactFormRepositoryTest {

    public static final Long CONTACT_FORM_ID = 1L;
    public static final String TITLE = "Contact form test";
    public static final String USER_EMAIL = "user@email.com";
    public static final String USER_PHONE = "123456789";
    public static final String MESSAGE = "Test description.";

    @Mock
    private ContactFormRepository contactFormRepository;

    @Test
    @Transactional
    public void getContactFormByIdTest() {
        //arrange
        ContactForm contactForm = new ContactForm(CONTACT_FORM_ID, TITLE, USER_EMAIL, USER_PHONE, MESSAGE);
        //act
        when(contactFormRepository.getById(1L)).thenReturn(contactForm);
        //assert
        Assert.assertEquals(CONTACT_FORM_ID, contactFormRepository.getById(1L).getId());
    }

    @Test
    @Transactional
    public void getAllContactFormsTest() {
        //arrange
        ContactForm contactForm1 = new ContactForm(CONTACT_FORM_ID, TITLE, USER_EMAIL, USER_PHONE, MESSAGE);
        ContactForm contactForm2 = new ContactForm(2L, "contact form 2", "user2@email.com", "0987654321", "message 2");
        //act
        when(contactFormRepository.findAll()).thenReturn(Arrays.asList(contactForm1, contactForm2));
        //assert
        Assert.assertEquals(Arrays.asList(contactForm1, contactForm2), contactFormRepository.findAll());
    }

    @Test
    @Transactional
    public void addContactFormTest()
    {
        //arrange
        ContactForm contactForm = new ContactForm(CONTACT_FORM_ID, TITLE, USER_EMAIL, USER_PHONE, MESSAGE);
        //act
        when(contactFormRepository.save(any(ContactForm.class))).thenReturn(contactForm);
        //assert
        Assert.assertEquals(contactForm, contactFormRepository.save(contactForm));
    }
}
