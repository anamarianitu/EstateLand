package com.estate.demo.service.implementation;

import com.estate.demo.exception.model.PropertyNotFoundException;
import com.estate.demo.model.FavouriteProperty;
import com.estate.demo.model.Property;
import com.estate.demo.repository.FavouritePropertyRepository;
import com.estate.demo.repository.PropertyRepository;
import com.estate.demo.service.PropertyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class PropertyServiceImplementation implements PropertyService {

    private PropertyRepository propertyRepository;
    private FavouritePropertyRepository favouritePropertyRepository;

    @Autowired
    public PropertyServiceImplementation(PropertyRepository propertyRepository, FavouritePropertyRepository favouritePropertyRepository){
        this.propertyRepository = propertyRepository;
        this.favouritePropertyRepository = favouritePropertyRepository;
    }

    @Override
    public Property addNewProperty(Property property) {
        propertyRepository.save(property);
        return property;
    }

    @Override
    public List<Property> getProperties() {
        return propertyRepository.findAll();
    }

    @Override
    public Optional<Property> getPropertyById(Long id) {
        return propertyRepository.findById(id);
    }

    @Override
    public void deleteProperty(Long id) {
        //delete the favourite properties for this property
        propertyRepository.deleteById(id);
        for (FavouriteProperty fav:
             favouritePropertyRepository.findAll()) {
            if(fav.getIdProperty().getId() == id){
                favouritePropertyRepository.deleteById(fav.getId());
            }
        }
    }

    @Override
    public int getNrPropertiesForRent() {
        int nrRent = 0;
        for (Property p:
             this.getProperties()) {
            if(p.getRentSale().equals("rent") && p.isAvailable()){nrRent ++;}
        }
        return nrRent;
    }

    @Override
    public int getNrPropertiesForSale() {
        int nrSale = 0;
        for (Property p:
                this.getProperties()) {
            if(p.getRentSale().equals("sale") && p.isAvailable()){nrSale ++;}
        }
        return nrSale;
    }

    @Override
    public int nrPropertiesPerCity(String city) {
        int nrPerCity = 0;
        for (Property p:
                this.getProperties()) {
            if(p.getCity().equals(city)){nrPerCity ++;}
        }
        return nrPerCity;
    }

    @Override
    public int nrPropertiesPerHouseType(String houseType) {
        int nrPerType = 0;
        for (Property p:
                this.getProperties()) {
            if(p.getType().equals(houseType)){nrPerType ++;}
        }
        return nrPerType;
    }

    @Override
    public int nrAvailableProperties() {
        int nrAvailableProperties = 0;
        for (Property p:
             this.getProperties()) {
            if(p.isAvailable()){nrAvailableProperties++;}

        }
        return nrAvailableProperties;
    }

    @Override
    public List<Property> getPropertiesByRentSale(String rentSale) {
        List<Property> allProperties = propertyRepository.findAll();
        List<Property> filteredProperties = new ArrayList<>();

        for (Property property : allProperties) {
            if (property.getRentSale().equals(rentSale)) {
                filteredProperties.add(property);
            }
        }
        return filteredProperties;
    }

    @Override
    public List<Property> getPropertiesByType(String type) {
        List<Property> allProperties = propertyRepository.findAll();
        List<Property> filteredProperties = new ArrayList<>();

        for (Property property : allProperties) {
            if (property.getType().equals(type)) {
                filteredProperties.add(property);
            }
        }
        return filteredProperties;
    }

    @Override
    public List<Property> getPropertiesByCapacity(int capacity) {
        List<Property> allProperties = propertyRepository.findAll();
        List<Property> filteredProperties = new ArrayList<>();

        for (Property property : allProperties) {
            if (capacity < 4 && property.getCapacity() == capacity || capacity >= 4 && property.getCapacity() >= 4) {
                filteredProperties.add(property);
            }
        }
        return filteredProperties;
    }

    @Override
    public Property updateProperty(Long currentId, String title, String description, double price,
                                             boolean available, int capacity, String rentSale, String type,
                                             int nrRooms, int nrBathrooms, int floor, int squareMeters, String country, String city, String street, String postcode, int number) throws PropertyNotFoundException {
        Optional<Property> currentP = getPropertyById(currentId);

        if(currentP.isPresent()){
            Property currentProperty = currentP.get();
            currentProperty.setTitle(title);
            currentProperty.setDescription(description);
            currentProperty.setPrice(price);
            currentProperty.setAvailable(available);
            currentProperty.setCapacity(capacity);
            currentProperty.setRentSale(rentSale);
            currentProperty.setType(type);
            currentProperty.setNrRooms(nrRooms);
            currentProperty.setNrBathrooms(nrBathrooms);
            currentProperty.setFloor(floor);
            currentProperty.setSquareMeters(squareMeters);
            currentProperty.setCountry(country);
            currentProperty.setCity(city);
            currentProperty.setStreet(street);
            currentProperty.setPostcode(postcode);
            currentProperty.setNumber(number);
            propertyRepository.save(currentProperty);
            return currentProperty;
        }
        else {
            throw new PropertyNotFoundException("Property not found. Selected property doesn't exist in the database or the id is wrong");
        }
    }
}
