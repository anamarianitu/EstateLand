package com.estate.demo.controller;

import com.estate.demo.model.Property;
import com.estate.demo.service.PropertyService;
import org.junit.Before;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Import;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@EnableAutoConfiguration
@AutoConfigureMockMvc
@SpringBootTest(classes = {PropertyResource.class}, properties = {"security.basic.enabled=false","spring.main.lazy-initialization=true"})
@ActiveProfiles(value = "test")
@Import(PropertyResource.class)
public class PropertyControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    PropertyService propertyService;

    @Before
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    @Transactional
    @WithMockUser
    public void getPropertyByIdTest() throws Exception {
        //arrange
        Property property = new Property();
        property.setId(1L);
        when(propertyService.getPropertyById(property.getId())).thenReturn(java.util.Optional.of(property));
        //act
        mockMvc.perform(MockMvcRequestBuilders
                        .get("/property/{id}",property.getId())
                        .contentType(MediaType.APPLICATION_JSON))
                //assert
                .andExpect(status().isOk());
    }

    @Test
    @Transactional
    @WithMockUser
    public void getAllPropertiesTest() throws Exception {
        //arrange
        Property property1 = new Property(1L, "title 2", "description 2", 2000, true, 3, "sale", "house", 4, 2, 1, 130, "Romania", "Bucharest", "Str. George Enescu", 12, "5573A");
        Property property2 = new Property(2L, "title 2", "description 2", 2000, true, 3, "sale", "house", 4, 2, 1, 130, "Romania", "Bucharest", "Str. George Enescu", 12, "5573A");
        List<Property> properties = new ArrayList<>(Arrays.asList(property1, property2));
        when(propertyService.getProperties()).thenReturn(properties);
        //act
        mockMvc.perform(MockMvcRequestBuilders
                        .get("/allProperties")
                        .contentType(MediaType.APPLICATION_JSON))
                //assert
                .andExpect(status().isOk());
    }


}
