package com.estate.demo.model;

import org.junit.Assert;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import javax.transaction.Transactional;
import java.util.Date;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
public class ViewingTest {

    public static final Long VIEWING_ID = 20L;
    public static final Property PROPERTY_ID = new Property(15L, "Lombokpad", "Property description",
            2000, true, 4, "rent", "apartment", 3, 2, 4,
            100, "Romania", "Bucharest", "Str. George Enescu", 12, "5573A" );
    public static final String USER_EMAIL = "user@email.com";
    public static final String USER_PHONE = "123456789";
    public static final Date DATE = new Date();
    public static final String TIME_DISPONIBILITY = "morning";
    public static final String MESSAGE = "I would like to plan a viewing for this apartment.";

    private final Viewing viewing = new Viewing(VIEWING_ID, PROPERTY_ID, USER_EMAIL, USER_PHONE, DATE, TIME_DISPONIBILITY, MESSAGE);

    @AfterEach
    public void tearDown() {
    }

    @Test
    @Transactional
    public void getIdTest() {
        Assert.assertEquals(VIEWING_ID, viewing.getId());
    }

    @Test
    @Transactional
    public void setIdTest() {
        Long newId = 14L;
        viewing.setId(newId);
        Assert.assertEquals(newId, viewing.getId());
    }

    @Test
    @Transactional
    public void getPropertyIdTest() {
        Assert.assertEquals(PROPERTY_ID.getId(), viewing.getPropertyId().getId());
    }

    @Test
    @Transactional
    public void setPropertyIdTest() {
        Property newProperty = new Property(16L, "Lombokpad1", "Property description",
                2000, true, 4, "rent", "apartment", 3, 2, 4,
                100, "Romania", "Bucharest", "Str. George Enescu", 12, "5573A" );
        viewing.setPropertyId(newProperty);
        Assert.assertEquals(newProperty.getTitle(), viewing.getPropertyId().getTitle());
    }

    @Test
    @Transactional
    public void getUserEmailTest() {
        Assert.assertEquals(USER_EMAIL, viewing.getUserEmail());
    }

    @Test
    @Transactional
    public void setUserEmailTest() {
        String newUserEmail = "new@email.com";
        viewing.setUserEmail(newUserEmail);
        Assert.assertEquals(newUserEmail, viewing.getUserEmail());
    }

    @Test
    @Transactional
    public void getUserPhoneTest() {
        Assert.assertEquals(USER_PHONE, viewing.getUserPhone());
    }

    @Test
    @Transactional
    public void setUserPhoneTest() {
        viewing.setUserPhone("00000");
        Assert.assertEquals("00000", viewing.getUserPhone());
    }

    @Test
    @Transactional
    public void getTimeDisponibilityTest() {
        Assert.assertEquals(TIME_DISPONIBILITY, viewing.getTimeDisponibility());
    }

    @Test
    @Transactional
    public void setTimeDisponibilityTest() {
        viewing.setTimeDisponibility("evening");
        Assert.assertEquals("evening", viewing.getTimeDisponibility());
    }

    @Test
    @Transactional
    public void getMessageTest() {
        Assert.assertEquals(MESSAGE, viewing.getMessage());
    }

    @Test
    @Transactional
    public void setMessageTest() {
        viewing.setMessage("New test message");
        Assert.assertEquals("New test message", viewing.getMessage());
    }
}
