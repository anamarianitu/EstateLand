package com.estate.demo.service;

import com.estate.demo.model.Property;
import com.estate.demo.model.Viewing;

import java.util.List;
import java.util.Optional;

public interface ViewingService {
    Viewing addNewViewing(Viewing viewing);

    List<Viewing> getViewings();

    Optional<Viewing> getViewingById(Long id);

    void deleteViewing(Long id);

    Property getPropertyFromViewing(Long id);

    int nrViewingsForProperty(Long id);

    int nrViewings();

    List<Viewing> getLast5Viewings();

}
