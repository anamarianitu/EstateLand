package com.estate.demo.exception.model;

public class EmailExistException extends Exception {
    public EmailExistException(String message) {
        super(message);
    }
}
