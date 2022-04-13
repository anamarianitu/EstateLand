package com.estate.demo.controller;

import com.estate.demo.model.HttpResponse;
import com.estate.demo.model.Property;
import com.estate.demo.model.User;
import com.estate.demo.model.Viewing;
import com.estate.demo.service.ViewingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

import static org.springframework.http.HttpStatus.NO_CONTENT;
import static org.springframework.http.HttpStatus.OK;

@RestController
@RequestMapping(path = { "/", "/viewing"})
public class ViewingResource {

    public static final String VIEWING_DELETED_SUCCESSFULLY = "Viewing deleted successfully.";

    private ViewingService viewingService;

    @Autowired
    public ViewingResource(ViewingService viewingService) {
        this.viewingService = viewingService;
    }

    @PostMapping({"/addViewing"})
    public Viewing addNewViewing(@RequestBody Viewing viewing) {
        return viewingService.addNewViewing(viewing);
    }

    @GetMapping("/allViewings")
    public ResponseEntity<List<Viewing>> getAllViewings(){
        List<Viewing> viewings = viewingService.getViewings();
        return new ResponseEntity<>(viewings, OK);
    }

    @GetMapping("/last5Viewings")
    public ResponseEntity<List<Viewing>> getLast5Viewings(){
        List<Viewing> last5Viewings = viewingService.getLast5Viewings();
        return new ResponseEntity<>(last5Viewings, OK);
    }

    @GetMapping("{id}")
    public ResponseEntity<Optional<Viewing>> getViewingPath(@PathVariable(value = "id") Long id) {
        Optional<Viewing> viewing = viewingService.getViewingById(id);

        if(viewing != null) {
            return ResponseEntity.ok().body(viewing);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/getProperty/{id}")
    public ResponseEntity<Property> getViewingPropertyPath(@PathVariable(value = "id") Long id) {
        Property property = viewingService.getPropertyFromViewing(id);

        if(property != null) {
            return ResponseEntity.ok().body(property);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/nrViewingsForProperty/{id}")
    public int getNrViewingsForProperty(@PathVariable(value = "id") Long id){
        int nrViewingsForProperty = viewingService.nrViewingsForProperty(id);
        return nrViewingsForProperty;
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<HttpResponse> deleteViewing(@PathVariable("id") Long id){
        viewingService.deleteViewing(id);
        return response(NO_CONTENT, VIEWING_DELETED_SUCCESSFULLY);
    }

    @GetMapping("/nrViewings")
    public int getNrViewings(){
        int nrViewings = viewingService.nrViewings();
        return nrViewings;
    }

    private ResponseEntity<HttpResponse> response(HttpStatus httpStatus, String message) {
        return new ResponseEntity<>(new HttpResponse(httpStatus.value(), httpStatus, httpStatus.getReasonPhrase().toUpperCase(),
                message.toUpperCase()), httpStatus);
    }
}
