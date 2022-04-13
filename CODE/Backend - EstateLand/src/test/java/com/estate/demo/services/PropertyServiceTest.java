//package com.estate.demo.services;
//
//
//import com.estate.demo.exception.model.EmailExistException;
//import com.estate.demo.exception.model.UserNotFoundException;
//import com.estate.demo.exception.model.UsernameExistException;
//import com.estate.demo.model.FavouriteProperty;
//import com.estate.demo.model.Property;
//import com.estate.demo.model.User;
//import com.estate.demo.repository.FavouritePropertyRepository;
//import com.estate.demo.repository.FavouritePropertyRepositoryTest;
//import com.estate.demo.repository.PropertyRepository;
//import com.estate.demo.repository.UserRepository;
//import com.estate.demo.service.implementation.PropertyServiceImplementation;
//import com.estate.demo.service.implementation.UserServiceImplementation;
//import org.junit.Assert;
//import org.junit.Test;
//import org.junit.runner.RunWith;
//import org.mockito.InjectMocks;
//import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
//import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
//import org.springframework.boot.test.mock.mockito.MockBean;
//import org.springframework.test.context.ActiveProfiles;
//import org.springframework.test.context.junit4.SpringRunner;
//
//import javax.mail.MessagingException;
//
//import static org.mockito.Mockito.*;
//
//@RunWith(SpringRunner.class)
//@DataJpaTest
//@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
//@ActiveProfiles(value = "test")
//public class PropertyServiceTest {
//
//    @MockBean
//    PropertyRepository propertyRepository;
//
//    @MockBean
//    FavouritePropertyRepository favouritePropertyRepository;
//
//    @InjectMocks
//    PropertyServiceImplementation propertyServiceImplementation;
//
//    public static final Long PROPERTY_ID = 1L;
//    public static final String TITLE = "Property title test";
//    public static final String DESCRIPTION = "Property description test";
//    public static final double PRICE = 2000;
//    public static final boolean AVAILABLE = true;
//    public static final int CAPACITY = 3;
//    public static final String RENT_SALE = "rent";
//    public static final String TYPE = "house";
//    public static final int NR_ROOMS = 2;
//    public static final int NR_BATHROOMS = 1;
//    public static final int FLOOR = 2;
//    public static final int SQUARE_METERS = 45;
//
//    @Test
//    public void addPropertyTestSuccess() {
//        //arrange
//        Property property1 = new Property(PROPERTY_ID, TITLE, DESCRIPTION, PRICE, AVAILABLE, CAPACITY, RENT_SALE, TYPE,
//                NR_ROOMS, NR_BATHROOMS, FLOOR, SQUARE_METERS, "Romania", "Bucharest", "Str. George Enescu", 12, "5573A");
//        //act
//        when(propertyRepository.save(property1)).thenReturn(property1);
//        Property propertyAdded = propertyServiceImplementation.addNewProperty(property1);
//        //assert
//        Assert.assertEquals(propertyAdded.getTitle(), property1.getTitle());
//    }
//
////    @Test
////    public void getNrPropertiesForRent() {
////        //arrange
////        Property property1 = new Property(PROPERTY_ID, TITLE, DESCRIPTION, PRICE, AVAILABLE, CAPACITY, RENT_SALE, TYPE, NR_ROOMS, NR_BATHROOMS, FLOOR, SQUARE_METERS, "Romania", "Bucharest", "Str. George Enescu", 12, "5573A");
////        Property property2 = new Property(2L, TITLE, DESCRIPTION, PRICE, AVAILABLE, CAPACITY, RENT_SALE, TYPE, NR_ROOMS, NR_BATHROOMS, FLOOR, SQUARE_METERS, "Romania", "Bucharest", "Str. George Enescu", 12, "5573A");
////
////        //act
////        propertyRepository.save(property1);
////        propertyRepository.save(property2);
////        int nrRent = propertyServiceImplementation.getNrPropertiesForRent();
////        when(propertyServiceImplementation.getNrPropertiesForRent()).thenReturn(nrRent);
////        //assert
////        Assert.assertEquals(2, nrRent);
////    }
//
//}
