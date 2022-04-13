package com.estate.demo.controller;


import com.estate.demo.model.User;
import com.estate.demo.service.UserService;
import com.estate.demo.util.JWTTokenProvider;
import org.junit.Before;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Import;
import org.springframework.http.MediaType;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@EnableAutoConfiguration
@AutoConfigureMockMvc
@SpringBootTest(classes = {UserResource.class}, properties = {"security.basic.enabled=false","spring.main.lazy-initialization=true"})
@ActiveProfiles(value = "test")
@Import(UserResource.class)
public class UserControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    UserService userService;

    @MockBean
    AuthenticationManager authenticationManager;

    @MockBean
    JWTTokenProvider tokenProvider;

    @Before
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    @Transactional
    @WithMockUser
    public void getUserByIdTest() throws Exception {
        //arrange
        User user= new User();
        user.setId(1L);
        when(userService.getUserById(user.getId())).thenReturn(user);
        //act
        mockMvc.perform(MockMvcRequestBuilders
                        .get("/user/{id}",user.getId())
                        .contentType(MediaType.APPLICATION_JSON))
                //assert
                .andExpect(status().isOk());
    }

    @Test
    @Transactional
    @WithMockUser
    public void getUserByUsernameTest() throws Exception {
        //arrange
        User user= new User();
        user.setUsername("username");
        when(userService.findUserByUsername(user.getUsername())).thenReturn(user);
        //act
        mockMvc.perform(MockMvcRequestBuilders
                        .get("/user/find/{username}",user.getUsername())
                        .contentType(MediaType.APPLICATION_JSON))
                //assert
                .andExpect(status().isOk());
    }

    @Test
    @Transactional
    @WithMockUser
    public void getAllUsersTest() throws Exception {
        //arrange
        User user1 = new User(1L, "First name test1", "Last name test1", "Username test1", "Email test1", true, true);
        User user2 = new User(2L, "First name test2", "Last name test2", "Username test2", "Email test2", true, true);
        List<User> users = new ArrayList<>(Arrays.asList(user1, user2));
        when(userService.getUsers()).thenReturn(users);
        //act
        mockMvc.perform(MockMvcRequestBuilders
                        .get("/allUsers")
                        .contentType(MediaType.APPLICATION_JSON))
                //assert
                .andExpect(status().isOk());
    }

//    @Test
//    @WithMockUser
//    public void registerUserTest() throws Exception {
//        //arrange
//        User addedUser = new User();
//        addedUser.setFirstName("First Name");
//        addedUser.setLastName("Last Name");
//        addedUser.setUsername("Username");
//        addedUser.setEmail("Email");
//        when(userService.register("First Name", "Last Name", "Username", "Email")).thenReturn(addedUser);
//        //act
//        mockMvc.perform(MockMvcRequestBuilders
//                        .post("/user/register")
//                        .contentType(MediaType.APPLICATION_JSON)
//                        .content(addedUser.toString())
//                        .with(csrf()))
//                //assert
//                .andExpect(status().isOk());
//    }
//
//    @Test
//    @WithMockUser
//    public void addUserTest() throws Exception {
//        //arrange
//        User user = new User(1L, "12345678", "first name", "last name", "username", "password", "email", new Date(), new Date(), new Date(), Role.ROLE_USER.name(), Role.ROLE_USER.getAuthorities(), true, true);
//        when(userService.addNewUser("first name", "last name", "username", "email", Role.ROLE_USER.name(), true, true)).thenReturn(user);
//        //act
//        mockMvc.perform(MockMvcRequestBuilders
//                        .post("/user/add")
//                        .contentType(MediaType.APPLICATION_JSON)
//                        .param("firstName", user.getFirstName())
//                        .param("lastName", user.getLastName())
//                        .param("username", user.getUsername())
//                        .param("email", user.getEmail())
//                        .param("role", user.getRole())
//                        .param("isActive", user.isActive().toString())
//                        .param("isNotLocked", user.isNotLocked().toString())
//                        .with(csrf()))
//                //assert
//                .andExpect(status().isOk());
//
//    }
//
//    @Test
//    @WithMockUser
//    public void updateUserTest() throws Exception {
//        //arrange
//        User user = new User(1L, "USER_RANDOM_ID", "FIRST_NAME", "LAST_NAME", "USERNAME", "PASSWORD", "EMAIL", new Date(), new Date(), new Date(), Role.ROLE_USER.name(), Role.ROLE_USER.getAuthorities(), true, true);
//        when(userService.updateUserPersonal(user.getUsername(), "new first name", "new last name", "new username", "new email")).thenReturn(user);
//        //act
//        mockMvc.perform(MockMvcRequestBuilders
//                        .post("/user/update")
//                        .contentType(MediaType.APPLICATION_JSON)
//                        .param("currentUsername", user.getUsername())
//                        .param("username", "A")
//                        .param("email", "B")
//                        .with(csrf()))
//                //assert
//                .andExpect(status().isOk());
//
//    }
}
