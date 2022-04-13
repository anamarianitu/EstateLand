package com.estate.demo.repository;

import com.estate.demo.model.Property;
import com.estate.demo.model.Viewing;
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
import java.util.Date;

import static org.mockito.Mockito.*;

@RunWith(SpringRunner.class)
@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@ActiveProfiles(value = "test")
public class ViewingRepositoryTest {

    @Mock
    private ViewingRepository viewingRepository;

    public static final Long VIEWING_ID = 1L;
    public static final Property PROPERTY_ID = new Property(1L, "Lombokpad", "Property description",
            2000, true, 4, "rent", "apartment", 3, 2, 4,
            100, "Romania", "Bucharest", "Str. George Enescu", 12, "5573A" );
    public static final String USER_EMAIL = "user@email.com";
    public static final String USER_PHONE = "123456789";
    public static final Date DATE = new Date();
    public static final String TIME_DISPONIBILITY = "morning";
    public static final String MESSAGE = "I would like to plan a viewing for this apartment.";

    @Test
    @Transactional
    public void getViewingByIdTest() {
        //arrange
        Viewing viewing = new Viewing(VIEWING_ID, PROPERTY_ID, USER_EMAIL, USER_PHONE, DATE, TIME_DISPONIBILITY, MESSAGE);
        //act
        when(viewingRepository.getById(1L)).thenReturn(viewing);
        //assert
        Assert.assertEquals(VIEWING_ID, viewingRepository.getById(1L).getId());
    }

    @Test
    @Transactional
    public void getAllPropertiesTest() {
        //arrange
        Viewing viewing1 = new Viewing(VIEWING_ID, PROPERTY_ID, USER_EMAIL, USER_PHONE, DATE, TIME_DISPONIBILITY, MESSAGE);
        Viewing viewing2 = new Viewing(2L, PROPERTY_ID, "email2@email.com", "1234567890", DATE, "evening", MESSAGE);
        //act
        when(viewingRepository.findAll()).thenReturn(Arrays.asList(viewing1, viewing2));
        //assert
        Assert.assertEquals(Arrays.asList(viewing1, viewing2), viewingRepository.findAll());
    }

    @Test
    @Transactional
    public void addPropertyTest()
    {
        //arrange
        Viewing viewing = new Viewing(VIEWING_ID, PROPERTY_ID, USER_EMAIL, USER_PHONE, DATE, TIME_DISPONIBILITY, MESSAGE);
        //act
        when(viewingRepository.save(any(Viewing.class))).thenReturn(viewing);
        //assert
        Assert.assertEquals(viewing, viewingRepository.save(viewing));
    }
}

