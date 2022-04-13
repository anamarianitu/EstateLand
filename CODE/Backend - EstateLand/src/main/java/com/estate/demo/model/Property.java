package com.estate.demo.model;

import javax.persistence.*;

@Entity
@Table(name ="property")
public class Property {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "description")
    private String description;

    @Column(name = "price")
    private double price;

    @Column(name = "available")
    private boolean available;

    @Column(name = "capacity")
    private int capacity;

    @Column(name = "rentSale")
    private String rentSale;

    @Column(name = "type")
    private String type;

    @Column(name = "nrRooms")
    private int nrRooms;

    @Column(name = "nrBathrooms")
    private int nrBathrooms;

    @Column(name = "floor")
    private int floor;

    @Column(name = "squareMeters")
    private int squareMeters;

    @Column(name = "city")
    private String city;

    @Column(name = "country")
    private String country;

    @Column(name = "street")
    private String street;

    @Column(name = "number")
    private int number;

    @Column(name = "postcode")
    private String postcode;

    public Property() {
    }

    public Property(Long id, String title, String description, double price, boolean available, int capacity, String rentSale, String type, int nrRooms, int nrBathrooms, int floor, int squareMeters, String country, String city, String street, int number, String postcode) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.available = available;
        this.capacity = capacity;
        this.rentSale = rentSale;
        this.type = type;
        this.nrRooms = nrRooms;
        this.nrBathrooms = nrBathrooms;
        this.floor = floor;
        this.squareMeters = squareMeters;
        this.country = country;
        this.city = city;
        this.street = street;
        this.number = number;
        this.postcode = postcode;
    }

    public Long getId(){return this.id;}
    public void setId(Long id){this.id = id;}

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public int getCapacity() {
        return capacity;
    }

    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }

    public String getRentSale() {
        return rentSale;
    }

    public void setRentSale(String rentSale) {
        this.rentSale = rentSale;
    }

    public boolean isAvailable() {
        return available;
    }

    public void setAvailable(boolean available) {
        this.available = available;
    }

    public int getNrRooms() {
        return nrRooms;
    }

    public void setNrRooms(int nrRooms) {
        this.nrRooms = nrRooms;
    }

    public int getNrBathrooms() {
        return nrBathrooms;
    }

    public void setNrBathrooms(int nrBathrooms) {
        this.nrBathrooms = nrBathrooms;
    }

    public int getFloor() {
        return floor;
    }

    public void setFloor(int floor) {
        this.floor = floor;
    }

    public int getSquareMeters() {
        return squareMeters;
    }

    public void setSquareMeters(int squareMeters) {
        this.squareMeters = squareMeters;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }

    public String getPostcode() {
        return postcode;
    }

    public void setPostcode(String postcode) {
        this.postcode = postcode;
    }
}



