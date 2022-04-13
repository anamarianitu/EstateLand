package com.estate.demo.service.implementation;

import com.estate.demo.exception.model.AlreadySavedPropertyToFavourite;
import com.estate.demo.model.FavouriteProperty;
import com.estate.demo.repository.FavouritePropertyRepository;
import com.estate.demo.service.FavouritePropertyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class FavouritePropertyServiceImplementation implements FavouritePropertyService {

    private FavouritePropertyRepository favouritePropertyRepository;

    @Autowired
    public FavouritePropertyServiceImplementation(FavouritePropertyRepository favouritePropertyRepository) {
        this.favouritePropertyRepository = favouritePropertyRepository;
    }

    @Override
    public FavouriteProperty addNewFavouriteProperty(FavouriteProperty favouriteProperty) throws AlreadySavedPropertyToFavourite {
        if (checkPropertyAlreadySaved(favouriteProperty)){
            throw new AlreadySavedPropertyToFavourite("The property is already in the list of saved ones");
        }
        else{
            favouritePropertyRepository.save(favouriteProperty);
            return favouriteProperty;
        }
    }

    @Override
    public List<FavouriteProperty> getAllFavourites() {
        return favouritePropertyRepository.findAll();
    }

    @Override
    public List<FavouriteProperty> getFavouritePropertiesByUserId(Long idUser) {
        List<FavouriteProperty> favouritePropertiesById = new ArrayList<>();
        for (FavouriteProperty fav:
             this.getAllFavourites()) {
            if(fav.getIdUser().getId() == idUser){
                favouritePropertiesById.add(fav);
            }
        }
        return favouritePropertiesById;
    }

    @Override
    public void deleteFavouritePropertyOfUser(Long idFavourite) {
        favouritePropertyRepository.deleteById(idFavourite);
    }

    @Override
    public int getNrFavouritesOfUser(Long idUser) {
        return this.getFavouritePropertiesByUserId(idUser).size();
    }

    private boolean checkPropertyAlreadySaved(FavouriteProperty favouriteProperty){
        for (FavouriteProperty f:
                this.getAllFavourites()) {
            if(f.getIdProperty().getId() == favouriteProperty.getIdProperty().getId() && f.getIdUser().getId() == favouriteProperty.getIdUser().getId()){
                return true; //already exists
            }
        }
        return false;
    }
}
