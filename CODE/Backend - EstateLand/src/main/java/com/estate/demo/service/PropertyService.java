package com.estate.demo.service;

import com.estate.demo.exception.model.PropertyNotFoundException;
import com.estate.demo.model.Property;

import java.util.List;
import java.util.Optional;

public interface PropertyService {

    Property addNewProperty(Property property);

    List<Property> getProperties();

    Optional<Property> getPropertyById(Long id);

    void deleteProperty(Long id);

    int getNrPropertiesForRent();

    int getNrPropertiesForSale();

    int nrPropertiesPerCity(String city);

    int nrPropertiesPerHouseType(String houseType);

    int nrAvailableProperties();

    List<Property> getPropertiesByRentSale(String rentSale);

    List<Property> getPropertiesByType(String type);

    List<Property> getPropertiesByCapacity(int capacity);

    Property updateProperty(Long currentId,String title,String description,double price,boolean available,int capacity,String rentSale,String type,int nrRooms,int nrBathrooms,int floor,int squareMeters, String country, String city, String street, String postcode, int number) throws PropertyNotFoundException;
}
