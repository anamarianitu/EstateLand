package com.estate.demo.exception.model;

public class UsernameExistException extends Exception {
    public UsernameExistException(String message) {
        super(message);
    }
}
