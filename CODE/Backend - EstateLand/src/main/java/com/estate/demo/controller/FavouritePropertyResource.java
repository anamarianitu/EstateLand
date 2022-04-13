package com.estate.demo.controller;

import com.estate.demo.exception.model.AlreadySavedPropertyToFavourite;
import com.estate.demo.model.FavouriteProperty;
import com.estate.demo.model.HttpResponse;
import com.estate.demo.service.FavouritePropertyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.websocket.server.PathParam;
import java.util.List;
import static org.springframework.http.HttpStatus.NO_CONTENT;
import static org.springframework.http.HttpStatus.OK;

@RestController
@RequestMapping(path = { "/favourite"})
public class FavouritePropertyResource {

    private static final String FAVOURITE_PROPERTY_DELETED_SUCCESSFULLY = "Favourite property deleted successfully!";
    private FavouritePropertyService favouritePropertyService;

    @Autowired
    public FavouritePropertyResource(FavouritePropertyService favouritePropertyService) {
        this.favouritePropertyService = favouritePropertyService;
    }

    @PostMapping({"/addFavouriteProperty"})
    public FavouriteProperty addNewFavouriteProperty(@RequestBody FavouriteProperty favouriteProperty) throws AlreadySavedPropertyToFavourite {
        return favouritePropertyService.addNewFavouriteProperty(favouriteProperty);
    }

    @GetMapping("/allFavouriteOfUser/{idUser}")
    public ResponseEntity<List<FavouriteProperty>> getAllFavouritePropertiesOfUser(@PathVariable("idUser") Long idUser){
        List<FavouriteProperty> favouriteProperties = favouritePropertyService.getFavouritePropertiesByUserId(idUser);
        return new ResponseEntity<>(favouriteProperties, OK);
    }

    @GetMapping("/nrFavouritesOfUser/{idUser}")
    public int nrFavouritesOfUser(@PathVariable("idUser") Long idUser){
        int nrFavouritesOfUser = favouritePropertyService.getNrFavouritesOfUser(idUser);
        return nrFavouritesOfUser;
    }

    @DeleteMapping("/delete/{idFavourite}")
    public ResponseEntity<HttpResponse> deleteFavourite(@PathVariable("idFavourite") Long id){
        favouritePropertyService.deleteFavouritePropertyOfUser(id);
        return response(NO_CONTENT, FAVOURITE_PROPERTY_DELETED_SUCCESSFULLY);
    }

    private ResponseEntity<HttpResponse> response(HttpStatus httpStatus, String message) {
        return new ResponseEntity<>(new HttpResponse(httpStatus.value(), httpStatus, httpStatus.getReasonPhrase().toUpperCase(),
                message.toUpperCase()), httpStatus);
    }
}
