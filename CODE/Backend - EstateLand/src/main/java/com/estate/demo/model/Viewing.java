package com.estate.demo.model;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name ="viewing")
public class Viewing {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "propertyId")
    private Property propertyId;

    @Column(name = "userEmail")
    private String userEmail;

    @Column(name = "userPhone")
    private String userPhone;

    @Column(name = "date")
    private Date date;

    @Column(name = "timeDisponibility")
    private String timeDisponibility;

    @Column(name = "message")
    private String message;

    public Viewing() {
    }

    public Viewing(Long id, Property propertyId, String userEmail, String userPhone, Date date, String timeDisponibility, String message) {
        this.id = id;
        this.propertyId = propertyId;
        this.userEmail = userEmail;
        this.userPhone = userPhone;
        this.date = date;
        this.timeDisponibility = timeDisponibility;
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Property getPropertyId() {
        return this.propertyId;
    }

    public void setPropertyId(Property propertyId) {
        this.propertyId = propertyId;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public String getUserPhone() {
        return this.userPhone;
    }

    public void setUserPhone(String userPhone) {
        this.userPhone = userPhone;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getTimeDisponibility() {
        return this.timeDisponibility;
    }

    public void setTimeDisponibility(String timeDisponibility) {
        this.timeDisponibility = timeDisponibility;
    }
}
