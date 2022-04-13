package com.estate.demo.model;

import com.estate.demo.enumeration.Role;
import org.junit.After;
import org.junit.Assert;
import org.junit.Test;
import org.junit.jupiter.api.AfterEach;
import org.junit.runner.RunWith;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import javax.transaction.Transactional;
import java.util.Date;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
public class FavouritePropertyTest {

    public static final Long FAVOURITE_PROPERTY_ID = 20L;
    public static final Property PROPERTY_ID = new Property(15L, "Lombokpad", "Property description",
            2000, true, 4, "rent", "apartment", 3, 2, 4,
            100, "Romania", "Bucharest", "Str. George Enescu", 12, "5573A" );
    public static final User USER_ID = new User(12L, "Random Id Test", "First name", "Last name", "username", "password", "email@email.com", new Date(), new Date(), new Date(), "ROLE_USER", Role.valueOf("ROLE_USER").getAuthorities(), true, true);

    private final FavouriteProperty favouriteProperty = new FavouriteProperty(FAVOURITE_PROPERTY_ID, PROPERTY_ID, USER_ID);

    @AfterEach
    public void tearDown() {
    }

    @Test
    @Transactional
    public void getIdTest() {
        Assert.assertEquals(FAVOURITE_PROPERTY_ID, favouriteProperty.getId());
    }

    @Test
    @Transactional
    public void setIdTest() {
        Long newId = 21L;
        favouriteProperty.setId(newId);
        Assert.assertEquals(newId, favouriteProperty.getId());
    }

    @Test
    @Transactional
    public void getPropertyIdTest() {
        Assert.assertEquals(PROPERTY_ID.getId(), favouriteProperty.getIdProperty().getId());
    }

    @Test
    @Transactional
    public void setPropertyIdTest() {
        Property newProperty = new Property(16L, "Lombokpad1", "Property description",
                2000, true, 4, "rent", "apartment", 3, 2, 4,
                100, "Romania", "Bucharest", "Str. George Enescu", 12, "5573A" );
        favouriteProperty.setIdProperty(newProperty);
        Assert.assertEquals(newProperty.getId(), favouriteProperty.getIdProperty().getId());
    }

    @Test
    @Transactional
    public void getUserIdTest() {
        Assert.assertEquals(USER_ID.getId(), favouriteProperty.getIdUser().getId());
    }

    @Test
    @Transactional
    public void setUserIdTest() {
        User newUser = new User(13L, "Random Id Test", "First name", "Last name", "username", "password", "email@email.com", new Date(), new Date(), new Date(), "ROLE_USER", Role.valueOf("ROLE_USER").getAuthorities(), true, true);
        favouriteProperty.setIdUser(newUser);
        Assert.assertEquals(newUser.getId(), favouriteProperty.getIdUser().getId());
    }
}
