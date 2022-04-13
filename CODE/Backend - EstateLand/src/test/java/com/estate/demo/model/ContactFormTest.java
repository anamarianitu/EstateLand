package com.estate.demo.model;

import org.junit.Assert;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import javax.transaction.Transactional;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
public class ContactFormTest {

    public static final Long CONTACT_FORM_ID = 20L;
    public static final String TITLE = "Contact form test";
    public static final String USER_EMAIL = "user@email.com";
    public static final String USER_PHONE = "123456789";
    public static final String MESSAGE = "Test description.";

    private final ContactForm contactForm = new ContactForm(CONTACT_FORM_ID, TITLE, USER_EMAIL, USER_PHONE, MESSAGE);

    @AfterEach
    public void tearDown() {
    }

    @Test
    @Transactional
    public void getIdTest() {
        Assert.assertEquals(CONTACT_FORM_ID, contactForm.getId());
    }

    @Test
    @Transactional
    public void setIdTest() {
        Long newId = 14L;
        contactForm.setId(newId);
        Assert.assertEquals(newId, contactForm.getId());
    }

    @Test
    @Transactional
    public void getTitleTest() {
        Assert.assertEquals(TITLE, contactForm.getTitle());
    }

    @Test
    @Transactional
    public void setTitleTest() {
        String newTitle = "New title";
        contactForm.setTitle(newTitle);
        Assert.assertEquals(newTitle, contactForm.getTitle());
    }

    @Test
    @Transactional
    public void getUserEmailTest() {
        Assert.assertEquals(USER_EMAIL, contactForm.getUserEmail());
    }

    @Test
    @Transactional
    public void setUserEmailTest() {
        String newUserEmail = "new@email.com";
        contactForm.setUserEmail(newUserEmail);
        Assert.assertEquals(newUserEmail, contactForm.getUserEmail());
    }

    @Test
    @Transactional
    public void getUserPhoneTest() {
        Assert.assertEquals(USER_PHONE, contactForm.getUserPhone());
    }

    @Test
    @Transactional
    public void setUserPhoneTest() {
        contactForm.setUserPhone("00000");
        Assert.assertEquals("00000", contactForm.getUserPhone());
    }

    @Test
    @Transactional
    public void getMessageTest() {
        Assert.assertEquals(MESSAGE, contactForm.getMessage());
    }

    @Test
    @Transactional
    public void setMessageTest() {
        contactForm.setMessage("New test message");
        Assert.assertEquals("New test message", contactForm.getMessage());
    }
}
