package com.estate.demo.repository;


import com.estate.demo.enumeration.Role;
import com.estate.demo.model.FavouriteProperty;
import com.estate.demo.model.Property;
import com.estate.demo.model.User;
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
public class FavouritePropertyRepositoryTest {

    public static final Long FAVOURITE_PROPERTY_ID = 1L;
    public static final Property PROPERTY_ID = new Property(1L, "Lombokpad", "Property description",
            2000, true, 4, "rent", "apartment", 3, 2, 4,
            100, "Romania", "Bucharest", "Str. George Enescu", 12, "5573A" );
    public static final User USER_ID = new User(1L, "Random Id Test", "First name", "Last name", "username", "password", "email@email.com", new Date(), new Date(), new Date(), "ROLE_USER", Role.valueOf("ROLE_USER").getAuthorities(), true, true);

    @Mock
    private FavouritePropertyRepository favouritePropertyRepository;

    @Test
    @Transactional
    public void getFavouritePropertyIdTest() {
        //arrange
        FavouriteProperty favouriteProperty = new FavouriteProperty(FAVOURITE_PROPERTY_ID, PROPERTY_ID, USER_ID);
        //act
        when(favouritePropertyRepository.getById(1L)).thenReturn(favouriteProperty);
        //assert
        Assert.assertEquals(FAVOURITE_PROPERTY_ID, favouritePropertyRepository.getById(1L).getId());
    }

    @Test
    @Transactional
    public void getAllFavouritePropertiesTest() {
        //arrange
        FavouriteProperty favouriteProperty1 = new FavouriteProperty(FAVOURITE_PROPERTY_ID, PROPERTY_ID, USER_ID);
        FavouriteProperty favouriteProperty2 = new FavouriteProperty(2L, PROPERTY_ID, USER_ID);
        //act
        when(favouritePropertyRepository.findAll()).thenReturn(Arrays.asList(favouriteProperty1, favouriteProperty2));
        //assert
        Assert.assertEquals(Arrays.asList(favouriteProperty1, favouriteProperty2), favouritePropertyRepository.findAll());
    }

    @Test
    @Transactional
    public void addFavouritePropertyTest()
    {
        //arrange
        FavouriteProperty favouriteProperty = new FavouriteProperty(FAVOURITE_PROPERTY_ID, PROPERTY_ID, USER_ID);
        //act
        when(favouritePropertyRepository.save(any(FavouriteProperty.class))).thenReturn(favouriteProperty);
        //assert
        Assert.assertEquals(favouriteProperty, favouritePropertyRepository.save(favouriteProperty));
    }
}
