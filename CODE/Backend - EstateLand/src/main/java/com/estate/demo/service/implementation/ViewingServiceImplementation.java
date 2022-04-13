package com.estate.demo.service.implementation;

import com.estate.demo.model.Property;
import com.estate.demo.model.User;
import com.estate.demo.model.Viewing;
import com.estate.demo.repository.PropertyRepository;
import com.estate.demo.repository.ViewingRepository;
import com.estate.demo.service.ViewingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ViewingServiceImplementation implements ViewingService {

    private ViewingRepository viewingRepository;
    private PropertyRepository propertyRepository;

    @Autowired
    public ViewingServiceImplementation(ViewingRepository viewingRepository, PropertyRepository propertyRepository){
        this.viewingRepository = viewingRepository;
        this.propertyRepository = propertyRepository;
    }

    @Override
    public Viewing addNewViewing(Viewing viewing) {
        viewingRepository.save(viewing);
        return viewing;
    }

    @Override
    public List<Viewing> getViewings() {
        return viewingRepository.findAll();
    }

    @Override
    public Optional<Viewing> getViewingById(Long id) {
        return viewingRepository.findById(id);
    }

    @Override
    public void deleteViewing(Long id) {
        viewingRepository.deleteById(id);
    }

    @Override
    public Property getPropertyFromViewing(Long id) {
        Viewing viewing = viewingRepository.findById(id).get();
        Property property = propertyRepository.findById(viewing.getPropertyId().getId()).get();
        return property;
    }

    @Override
    public int nrViewingsForProperty(Long id) {
        Property property = this.getPropertyFromViewing(id);
        int nrViewingsForProperty = 0;
        for (Viewing v:
             this.getViewings()) {
            if(v.getPropertyId().getId().equals(property.getId())) {
                {
                    nrViewingsForProperty++;
                }
            }
        }
        return nrViewingsForProperty;
    }

    @Override
    public int nrViewings() {
        return this.getViewings().size();
    }

    @Override
    public List<Viewing> getLast5Viewings() {
        List<Viewing> last5Viewings = new ArrayList<>();
        List<Viewing> all = this.getViewings();
        for(int i = all.size() -1 ; i > all.size() -6; i-- ){
            last5Viewings.add(all.get(i));
        }
        return last5Viewings;
    }

//    @Override
//    public List<Property> top6PropertiesByCompletedViewingForms() {
//        List<Property> top6PropertiesByCompletedForms = new ArrayList<>();
//
//        for (Viewing viewingRow:
//             this.getViewings()) {
//            if(viewingRow)
//        }
//
//        return top6PropertiesByCompletedForms;
//    }

}
