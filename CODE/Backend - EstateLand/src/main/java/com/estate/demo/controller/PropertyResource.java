package com.estate.demo.controller;


import com.estate.demo.exception.model.EmailExistException;
import com.estate.demo.exception.model.PropertyNotFoundException;
import com.estate.demo.exception.model.UserNotFoundException;
import com.estate.demo.exception.model.UsernameExistException;
import com.estate.demo.model.HttpResponse;
import com.estate.demo.model.Property;
import com.estate.demo.model.User;
import com.estate.demo.service.PropertyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.websocket.server.PathParam;
import java.io.IOException;
import java.util.List;
import java.util.Optional;

import static org.springframework.http.HttpStatus.NO_CONTENT;
import static org.springframework.http.HttpStatus.OK;

@RestController
@RequestMapping(path = { "/", "/property"})
public class PropertyResource {

    public static final String PROPERTY_DELETED_SUCCESSFULLY = "Property deleted successfully.";

    private PropertyService propertyService;

    @Autowired
    public PropertyResource(PropertyService propertyService){
        this.propertyService = propertyService;
    }

    @PostMapping({"/addProperty"})
    public Property addNewProperty(@RequestBody Property property) {
        return propertyService.addNewProperty(property);
    }

    @GetMapping("/allProperties")
    public ResponseEntity<List<Property>> getAllProperties(){
        List<Property> properties = propertyService.getProperties();
        return new ResponseEntity<>(properties, OK);
    }

    @GetMapping("{id}")
    public ResponseEntity<Optional<Property>> getPropertyPath(@PathVariable(value = "id") Long id) {
        Optional<Property> property = propertyService.getPropertyById(id);

        if(property != null) {
            return ResponseEntity.ok().body(property);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/delete/{id}")
//    @PreAuthorize("hasAnyAuthority('user:delete')")
    public ResponseEntity<HttpResponse> deleteProperty(@PathVariable("id") Long id){
        propertyService.deleteProperty(id);
        return response(NO_CONTENT, PROPERTY_DELETED_SUCCESSFULLY);
    }

    @PostMapping("/update")
    public ResponseEntity<Property> updateProperty(@RequestParam("currentId") Long currentId,
                                            @RequestParam("title") String title,
                                            @RequestParam("description") String description,
                                            @RequestParam("price") double price,
                                            @RequestParam("available") boolean available,
                                            @RequestParam("capacity") int capacity,
                                            @RequestParam("rentSale") String rentSale,
                                            @RequestParam("type") String type,
                                            @RequestParam("nrRooms") int nrRooms,
                                            @RequestParam("nrBathrooms") int nrBathrooms,
                                            @RequestParam("floor") int floor,
                                            @RequestParam("squareMeters") int squareMeters,
                                            @RequestParam("country") String country,
                                            @RequestParam("city") String city,
                                            @RequestParam("street") String street,
                                            @RequestParam("postcode") String postcode,
                                            @RequestParam("number") int number) throws PropertyNotFoundException {
        Property updatedProperty = propertyService.updateProperty(currentId, title, description, price, available, capacity, rentSale, type, nrRooms, nrBathrooms, floor, squareMeters, country, city, street, postcode, number);
        return new ResponseEntity<>(updatedProperty, OK);
    }

    @GetMapping("/nrPropertiesRent")
    public int getNrPropertiesRent(){
        int nrPropertiesForRent = propertyService.getNrPropertiesForRent();
        return nrPropertiesForRent;
    }

    @GetMapping("/nrPropertiesSale")
    public int getNrPropertiesSale(){
        int nrPropertiesForSale = propertyService.getNrPropertiesForSale();
        return nrPropertiesForSale;
    }

    @PostMapping("/nrPropertiesPerCity")
    public int getNrPropertiesPerCity(@RequestParam("city") String city){
        int nrPropertiesPerCity = propertyService.nrPropertiesPerCity(city);
        return nrPropertiesPerCity;
    }

    @PostMapping("/nrPropertiesPerType")
    public int getNrPropertiesPerType(@RequestParam("type") String type){
        int nrPropertiesPerType = propertyService.nrPropertiesPerHouseType(type);
        return nrPropertiesPerType;
    }

    @GetMapping("/nrAvailableProperties")
    public int getNrAvailableProperties(){
        int nrAvailableProperties = propertyService.nrAvailableProperties();
        return nrAvailableProperties;
    }

    @PostMapping("/listPropertiesByRentSale")
    public List<Property> getListPropertiesByRentSale(@RequestParam("rentSale") String rentSale){
        List<Property> lisPropertiesByRentSale = propertyService.getPropertiesByRentSale(rentSale);
        return lisPropertiesByRentSale;
    }

    @PostMapping("/listPropertiesByType")
    public List<Property> getListPropertiesByType(@RequestParam("type") String type){
        List<Property> lisPropertiesByType = propertyService.getPropertiesByType(type);
        return lisPropertiesByType;
    }

    @PostMapping("/listPropertiesByCapacity")
    public List<Property> getListPropertiesByCapacity(@RequestParam("capacity") int capacity){
        List<Property> lisPropertiesByCapacity = propertyService.getPropertiesByCapacity(capacity);
        return lisPropertiesByCapacity;
    }

    private ResponseEntity<HttpResponse> response(HttpStatus httpStatus, String message) {
        return new ResponseEntity<>(new HttpResponse(httpStatus.value(), httpStatus, httpStatus.getReasonPhrase().toUpperCase(),
                message.toUpperCase()), httpStatus);
    }

//    @GetMapping("/filterByRentSale")
//    public ResponseEntity<List<Property>> getPropertiesByRentSale(@PathVariable(value = "rentSale") String rentSale) {
//        List<Property> properties = null;
//        properties = propertyService.getPropertiesByRentSale(rentSale);
//
//        if(properties != null)
//        {
//            return ResponseEntity.ok().body(properties);
//        }
//        else
//        {
//            return ResponseEntity.notFound().build();
//        }
//
//    }



}
