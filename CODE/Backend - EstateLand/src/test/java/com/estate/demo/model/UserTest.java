package com.estate.demo.model;

import com.estate.demo.enumeration.Role;
import org.junit.Assert;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
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
public class UserTest {

    public static final Long USER_ID = 12L;
    public static final String USER_RANDOM_ID = "Random Id Test";
    public static final String FIRST_NAME = "FirstName Test";
    public static final String LAST_NAME = "LastName Test";
    public static final String USERNAME = "Username Test";
    public static final String PASSWORD = "Password Test";
    public static final String EMAIL = "unittest@gmail.com";
    public static final String IMAGE_URL = "http://localhost:8080/user/image/profile/temp";
    public static final String ROLE = "ROLE_USER";
    public static final String[] AUTHORITIES = Role.valueOf(ROLE).getAuthorities();
    public static final Boolean IS_ACTIVE = true;
    public static final Boolean NOT_LOCKED = true;
    public static final Date JOIN_DATE = new Date();
    public static final Date LAST_LOGIN_DATE = new Date();
    public static final Date LAST_LOGIN_DATE_DISPLAY = new Date();

    private final User user = new User(USER_ID, USER_RANDOM_ID, FIRST_NAME, LAST_NAME, USERNAME, PASSWORD, EMAIL, LAST_LOGIN_DATE, LAST_LOGIN_DATE_DISPLAY, JOIN_DATE, ROLE, AUTHORITIES, IS_ACTIVE, NOT_LOCKED);

    @AfterEach
    public void tearDown() {
    }

    @Test
    @Transactional
    public void getIdTest() {
        Assert.assertEquals(USER_ID, user.getId());
    }

    @Test
    @Transactional
    public void setIdTest() {
        Long newId = 2L;
        user.setId(newId);
        Assert.assertEquals(newId, user.getId());

    }

    @Test
    @Transactional
    public void getFirstNameTest() {
        Assert.assertEquals(FIRST_NAME, user.getFirstName());
    }

    @Test
    @Transactional
    public void setFirstNameTest() {
        String newFirstName = "New First Name";
        user.setFirstName(newFirstName);
        Assert.assertEquals(newFirstName, user.getFirstName());
    }

    @Test
    @Transactional
    public void getLastNameTest() {
        Assert.assertEquals(LAST_NAME, user.getLastName());
    }

    @Test
    public void setLastNameTest() {
        String newLastName = "New Last Name";
        user.setLastName(newLastName);
        Assert.assertEquals(newLastName, user.getLastName());
    }

    @Test
    @Transactional
    public void getUsernameTest() {
        Assert.assertEquals(USERNAME, user.getUsername());
    }

    @Test
    @Transactional
    public void setUsernameTest() {
        String newUsername = "New Username";
        user.setUsername(newUsername);
        Assert.assertEquals(newUsername, user.getUsername());
    }

    @Test
    @Transactional
    public void getEmailTest() {
        Assert.assertEquals(EMAIL, user.getEmail());
    }

    @Test
    @Transactional
    public void setEmailTest() {
        String newEmail = "New Email";
        user.setEmail(newEmail);
        Assert.assertEquals(newEmail, user.getEmail());
    }

    @Test
    @Transactional
    public void getRoleTest() {
        Assert.assertEquals(ROLE, user.getRole());
    }

    @Test
    @Transactional
    public void setRoleTest() {
        String newRole = "ROLE_USER";
        user.setRole(newRole);
        Assert.assertEquals(newRole, user.getRole());
    }

    @Test
    @Transactional
    public void getAuthoritiesTest() {
        Assertions.assertEquals(AUTHORITIES[0], user.getAuthorities()[0]);
    }

//    @Test
//    public void setAuthoritiesTest() {
//        String[] newAuthorities = Authorities.USER_AUTHORITIES;
//        user.setAuthorities(Role.valueOf("ROLE_ADMIN").getAuthorities());
//        Assertions.assertEquals(newAuthorities[0], user.getAuthorities()[0]);
//    }

    @Test
    @Transactional
    public void getIsActiveTest() {
        Assert.assertEquals(IS_ACTIVE, user.isActive());
    }

    @Test
    @Transactional
    public void setIsActiveTest() {
        user.setActive(false);
        Assert.assertEquals(false, user.isActive());
    }

    @Test
    @Transactional
    public void getIsNotLockedTest() {
        Assert.assertEquals(NOT_LOCKED, user.isNotLocked());
    }

    @Test
    @Transactional
    public void setIsNotLockedTest() {
        user.setNotLocked(false);
        Assert.assertEquals(false, user.isNotLocked());
    }

}
