package com.estate.demo.service;

import com.estate.demo.exception.model.EmailExistException;
import com.estate.demo.exception.model.EmailNotFoundException;
import com.estate.demo.exception.model.UserNotFoundException;
import com.estate.demo.exception.model.UsernameExistException;
import com.estate.demo.model.User;
import org.springframework.web.multipart.MultipartFile;

import javax.mail.MessagingException;
import java.io.IOException;
import java.util.List;

public interface UserService {

    User register(String firstName, String lastName, String username, String email) throws UserNotFoundException, UsernameExistException, EmailExistException, MessagingException;

    User findUserByUsername(String username);

    User findUserByEmail(String email);

    User getUserById(Long id);

    User addNewUser(String firstName, String lastName, String username, String email, String role, boolean isNonLocked, boolean isActive) throws UserNotFoundException, EmailExistException, UsernameExistException, IOException;

    User updateUser(String currentUsername, String newFirstName, String newLastName, String newUsername, String newEmail, String role, boolean isNonLocked, boolean isActive) throws UserNotFoundException, EmailExistException, UsernameExistException, IOException;

    User updateUserPersonal(String currentUsername, String newFirstName, String newLastName, String newUsername, String newEmail) throws UserNotFoundException, EmailExistException, UsernameExistException, IOException;

    void deleteUser(Long id);

    void resetPassword(String email) throws MessagingException, EmailNotFoundException;

    User updateProfileImage(String username, MultipartFile profileImage) throws UserNotFoundException, EmailExistException, UsernameExistException, IOException;

    List<User> getUsers();

    List<User> getAdmins();

    List<User> getAgents();

    List<User> getUsersUserRole();

    List<User> getLast5RegisteredUsers();

    int nrRegisteredUsers();
}
