package com.estate.demo.model;

import javax.persistence.*;

@Entity
@Table(name ="contact_form")
public class ContactForm {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "userEmail")
    private String userEmail;

    @Column(name = "userPhone")
    private String userPhone;

    @Column(name = "message")
    private String message;

    public ContactForm() {
    }

    public ContactForm(Long id, String title, String userEmail, String userPhone, String message) {
        this.id = id;
        this.title = title;
        this.userEmail = userEmail;
        this.userPhone = userPhone;
        this.message = message;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public String getUserPhone() {
        return userPhone;
    }

    public void setUserPhone(String userPhone) {
        this.userPhone = userPhone;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
