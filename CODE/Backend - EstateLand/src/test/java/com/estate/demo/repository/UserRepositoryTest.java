package com.estate.demo.repository;

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

import static org.mockito.Mockito.*;

@RunWith(SpringRunner.class)
@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@ActiveProfiles(value = "test")
public class UserRepositoryTest {

    @Mock
    UserRepository userRepository;

    @Test
    @Transactional
    public void getUserByIdTest() {
        //arrange
        Long id = 1L;
        User user = new User(id, "First name test", "Last name test", "Username test", "Email test", true, true);
        //act
        when(userRepository.getById(1L)).thenReturn(user);
        //assert
        Assert.assertEquals(id, userRepository.getById(1L).getId());
    }

    @Test
    @Transactional
    public void getAllUsersTest() {
        //arrange
        User user1 = new User(1L, "First name test1", "Last name test1", "Username test1", "Email test1", true, true);
        User user2 = new User(2L, "First name test2", "Last name test2", "Username test2", "Email test2", true, true);

        //act
        when(userRepository.findAll()).thenReturn(Arrays.asList(user1, user2));
        //assert
        Assert.assertEquals(Arrays.asList(user1, user2), userRepository.findAll());
    }

    @Test
    @Transactional
    public void findUserByUsernameTest()
    {
        //arrange
        User user = new User(1L, "First name test", "Last name test", "Username test", "Email test", true, true);
        //act
        when(userRepository.findUserByUsername(any(String.class))).thenReturn(user);
        //assert
        Assert.assertEquals(user, userRepository.findUserByUsername("Username test"));
    }

    @Test
    @Transactional
    public void findUserByEmailTest()
    {
        //arrange
        User user = new User(1L, "First name test", "Last name test", "Username test", "Email test", true, true);
        //act
        when(userRepository.findUserByEmail(any(String.class))).thenReturn(user);
        //assert
        Assert.assertEquals(user, userRepository.findUserByEmail("Email test"));
    }

    @Test
    @Transactional
    public void addUserTest()
    {
        //arrange
        User user = new User(1L, "First name test", "Last name test", "Username test", "Email test", true, true);
        //act
        when(userRepository.save(any(User.class))).thenReturn(user);
        //assert
        Assert.assertEquals(user, userRepository.save(user));
    }
}
