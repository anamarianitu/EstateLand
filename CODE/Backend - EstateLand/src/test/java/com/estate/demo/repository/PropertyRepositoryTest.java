package com.estate.demo.repository;

import com.estate.demo.model.Property;
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
public class PropertyRepositoryTest {

    @Mock
    private PropertyRepository propertyRepository;

    public static final Long PROPERTY_ID = 1L;
    public static final String TITLE = "Property title test";
    public static final String DESCRIPTION = "Property description test";
    public static final double PRICE = 2000;
    public static final boolean AVAILABLE = true;
    public static final int CAPACITY = 3;
    public static final String RENT_SALE = "rent";
    public static final String TYPE = "house";
    public static final int NR_ROOMS = 2;
    public static final int NR_BATHROOMS = 1;
    public static final int FLOOR = 2;
    public static final int SQUARE_METERS = 45;

    @Test
    @Transactional
    public void getPropertyByIdTest() {
        //arrange
        Property property = new Property(PROPERTY_ID, TITLE, DESCRIPTION, PRICE, AVAILABLE, CAPACITY, RENT_SALE, TYPE, NR_ROOMS, NR_BATHROOMS, FLOOR, SQUARE_METERS, "Romania", "Bucharest", "Str. George Enescu", 12, "5573A");
        //act
        when(propertyRepository.getById(1L)).thenReturn(property);
        //assert
        Assert.assertEquals(PROPERTY_ID, propertyRepository.getById(1L).getId());
    }

    @Test
    @Transactional
    public void getAllPropertiesTest() {
        //arrange
        Property property1 = new Property(PROPERTY_ID, TITLE, DESCRIPTION, PRICE, AVAILABLE, CAPACITY, RENT_SALE, TYPE, NR_ROOMS, NR_BATHROOMS, FLOOR, SQUARE_METERS, "Romania", "Bucharest", "Str. George Enescu", 12, "5573A");
        Property property2 = new Property(2L, "title 2", "description 2", 2000, true, 3, "sale", "house", 4, 2, 1, 130, "Romania", "Bucharest", "Str. George Enescu", 12, "5573A");
        //act
        when(propertyRepository.findAll()).thenReturn(Arrays.asList(property1, property2));
        //assert
        Assert.assertEquals(Arrays.asList(property1, property2), propertyRepository.findAll());
    }

    @Test
    @Transactional
    public void addPropertyTest()
    {
        //arrange
        Property property = new Property(PROPERTY_ID, TITLE, DESCRIPTION, PRICE, AVAILABLE, CAPACITY, RENT_SALE, TYPE, NR_ROOMS,
            NR_BATHROOMS, FLOOR, SQUARE_METERS, "Romania", "Bucharest", "Str. George Enescu", 12, "5573A");
        //act
        when(propertyRepository.save(any(Property.class))).thenReturn(property);
        //assert
        Assert.assertEquals(property, propertyRepository.save(property));
    }


}
