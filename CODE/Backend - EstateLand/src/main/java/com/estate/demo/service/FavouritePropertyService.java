package com.estate.demo.service;
import com.estate.demo.exception.model.AlreadySavedPropertyToFavourite;
import com.estate.demo.model.FavouriteProperty;
import java.util.List;
import java.util.Optional;

public interface FavouritePropertyService {
    FavouriteProperty addNewFavouriteProperty(FavouriteProperty favouriteProperty) throws AlreadySavedPropertyToFavourite;

    List<FavouriteProperty> getAllFavourites();

    List<FavouriteProperty> getFavouritePropertiesByUserId(Long idUser);

    void deleteFavouritePropertyOfUser(Long idFavourite);

    int getNrFavouritesOfUser(Long idUser);
}
