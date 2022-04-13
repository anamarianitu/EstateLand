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
public class PropertyTest {

    public static final Long PROPERTY_ID = 12L;
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

    private final Property property = new Property(PROPERTY_ID, TITLE, DESCRIPTION, PRICE, AVAILABLE, CAPACITY, RENT_SALE, TYPE, NR_ROOMS, NR_BATHROOMS, FLOOR, SQUARE_METERS, "Romania", "Bucharest", "Str. George Enescu", 12, "5573A");


    @AfterEach
    public void tearDown() {
    }

    @Test
    @Transactional
    public void getIdTest() {
        Assert.assertEquals(PROPERTY_ID, property.getId());
    }

    @Test
    @Transactional
    public void setIdTest() {
        Long newId = 2L;
        property.setId(newId);
        Assert.assertEquals(newId, property.getId());
    }

    @Test
    @Transactional
    public void getTitleTest() {
        Assert.assertEquals(TITLE, property.getTitle());
    }

    @Test
    @Transactional
    public void setTitleTest() {
        String newPropertyTitle = "Add new title test";
        property.setTitle(newPropertyTitle);
        Assert.assertEquals(newPropertyTitle, property.getTitle());
    }

    @Test
    @Transactional
    public void getDescriptionTest() {
        Assert.assertEquals(DESCRIPTION, property.getDescription());
    }

    @Test
    @Transactional
    public void setDescriptionTest() {
        String newPropertyDescription = "Add new description test";
        property.setDescription(newPropertyDescription);
        Assert.assertEquals(newPropertyDescription, property.getDescription());
    }

    @Test
    @Transactional
    public void getPriceTest() {
        Assert.assertEquals(PRICE, property.getPrice(), 1);
    }

    @Test
    @Transactional
    public void setPriceTest() {
        int newPrice = 3000;
        property.setPrice(newPrice);
        Assert.assertEquals(newPrice, property.getPrice(), 1);
    }

    @Test
    @Transactional
    public void getAvailableTest() {
        Assert.assertEquals(AVAILABLE, property.isAvailable());
    }

    @Test
    @Transactional
    public void setAvailableTest() {
        property.setAvailable(false);
        Assert.assertEquals(false, property.isAvailable());
    }

    @Test
    @Transactional
    public void getCapacityTest() {
        Assert.assertEquals(CAPACITY, property.getCapacity());
    }

    @Test
    @Transactional
    public void setCapacityTest() {
        int newCapacity = 1;
        property.setCapacity(newCapacity);
        Assert.assertEquals(newCapacity, property.getCapacity());
    }

    @Test
    @Transactional
    public void getRentSaleTest() {
        Assert.assertEquals(RENT_SALE, property.getRentSale());
    }

    @Test
    @Transactional
    public void setRentSaleTest() {
        String newRentSale = "sale";
        property.setRentSale(newRentSale);
        Assert.assertEquals(newRentSale, property.getRentSale());
    }

    @Test
    @Transactional
    public void getTypeTest() {
        Assert.assertEquals(TYPE, property.getType());
    }

    @Test
    @Transactional
    public void setTypeTest() {
        String newType = "studio";
        property.setType(newType);
        Assert.assertEquals(newType, property.getType());
    }

    @Test
    @Transactional
    public void getNrRoomsTest() {
        Assert.assertEquals(NR_ROOMS, property.getNrRooms());
    }

    @Test
    @Transactional
    public void setNrRoomsTest() {
        int newNrRooms = 4;
        property.setNrRooms(newNrRooms);
        Assert.assertEquals(newNrRooms, property.getNrRooms());
    }

    @Test
    @Transactional
    public void getNrBathroomsTest() {
        Assert.assertEquals(NR_BATHROOMS, property.getNrBathrooms());
    }

    @Test
    @Transactional
    public void setNrBathroomsTest() {
        int newNrBathrooms = 2;
        property.setNrBathrooms(newNrBathrooms);
        Assert.assertEquals(newNrBathrooms, property.getNrBathrooms());
    }

    @Test
    @Transactional
    public void getFloorTest() {
        Assert.assertEquals(FLOOR, property.getFloor());
    }

    @Test
    @Transactional
    public void setFloorTest() {
        int newFloor = 2;
        property.setFloor(newFloor);
        Assert.assertEquals(newFloor, property.getFloor());
    }

    @Test
    @Transactional
    public void getSquareMetersTest() {
        Assert.assertEquals(SQUARE_METERS, property.getSquareMeters());
    }

    @Test
    @Transactional
    public void setSquareMetersTest() {
        int newSquareMeters = 50;
        property.setSquareMeters(newSquareMeters);
        Assert.assertEquals(newSquareMeters, property.getSquareMeters());
    }

}
