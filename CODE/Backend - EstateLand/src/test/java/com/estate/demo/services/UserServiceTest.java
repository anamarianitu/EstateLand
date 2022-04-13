package com.estate.demo.services;

import com.estate.demo.exception.model.EmailExistException;
import com.estate.demo.exception.model.UserNotFoundException;
import com.estate.demo.exception.model.UsernameExistException;
import com.estate.demo.model.User;
import com.estate.demo.repository.UserRepository;
import com.estate.demo.service.EmailService;
import com.estate.demo.service.LoginAttemptService;
import com.estate.demo.service.implementation.UserServiceImplementation;
import org.junit.Assert;
import org.junit.Before;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;


import javax.mail.MessagingException;
import javax.transaction.Transactional;
import java.io.IOException;
import java.util.Date;

import static org.mockito.Mockito.*;

@RunWith(SpringRunner.class)
@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@ActiveProfiles(value = "test")
public class UserServiceTest {

    @MockBean
    UserRepository userRepository;

    @MockBean
    LoginAttemptService logInAttemptService;

    @MockBean
    EmailService emailService;

    @MockBean
    BCryptPasswordEncoder passwordEncoder;

    @InjectMocks
    UserServiceImplementation userServiceImplementation;

    @Before
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

//    @Test
//    @Transactional
//    public void registerUserTestSuccess() throws MessagingException, UsernameExistException, EmailExistException, UserNotFoundException {
//        //arrange
//        User user = new User(1L, "First name test", "Last name test", "Username test", "Email test", true, true);
//        //act
//        when(userRepository.save(user)).thenReturn(user);
//        User created = userServiceImplementation.register(user.getFirstName(), user.getLastName(), user.getUsername(), user.getEmail());
//        //assert
//        Assert.assertEquals(created.getLastName(), user.getLastName());
//    }

//    @Test
//    public void loadUserByUsernameTestSuccess() throws UsernameNotFoundException {
//        //arrange
//        User user = new User(1L, "First name test", "Last name test", "Username test", "Email test", true, true);
//        UserDetails userDetails = new UserPrincipal(user);
//        //act
////        when(userRepository.save(user)).thenReturn(user);
//        when(userServiceImplementation.loadUserByUsername(any(String.class))).thenReturn(userDetails);
////        UserDetails userCheck = userServiceImplementation.loadUserByUsername("Username test");
//        //assert
//        Assert.assertEquals(userDetails.getUsername(), userServiceImplementation.loadUserByUsername(userDetails.getUsername()));
//    }

//    @Test
//    @Transactional
//    public void addNewUserTestSuccess() throws UserNotFoundException, EmailExistException, UsernameExistException, IOException {
//        //arrange
//        String fName = "Firstname";
//        String lName = "Lastname";
//        String username = "Username";
//        String email = "Email";
//        boolean isActive = true;
//        boolean isNotLocked = true;
//        String role = "ROLE_USER";
//
//        User user = new User(1L, "", fName, lName, username, "", email, new Date(), new Date(), new Date(), role, null, true, true);
//        //act
//        User userCkeck = userServiceImplementation.addNewUser(fName, lName, username, email, role, isActive, isNotLocked);
//        when(userServiceImplementation.addNewUser(fName, lName, username, email, role, isActive, isNotLocked)).thenReturn(user);
//        //assert
//        Assert.assertEquals(userCkeck.getUsername(), user.getUsername());
//    }

//    @Test
//    public void updateUserTestSuccess() throws UserNotFoundException, EmailExistException, UsernameExistException, IOException {
//        //arrange
//        String fName = "Firstname";
//        String lName = "Lastname";
//        String username = "Username";
//        String email = "Email";
//        boolean isActive = true;
//        boolean isNotLocked = true;
//        String role = "ROLE_USER";
//
//        User user = new User(1L, "", fName, lName, username, "", email, new Date(), new Date(), new Date(), role, null, true, true);
//        userRepository.save(user);
//        //act
//        User updatedUser = userServiceImplementation.updateUser(username, "new first name", "new last name", "new username", "new email", role, isActive, isNotLocked);
//        when(userServiceImplementation.updateUser(username, fName, lName, username, email, role, isActive, isNotLocked)).thenReturn(user);
//        //assert
//        Assert.assertEquals(updatedUser.getUsername(), "new username");
//    }
}
