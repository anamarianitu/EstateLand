package com.estate.demo.model;

import javax.persistence.*;

@Entity
@Table(name = "favourite_properties")
public class FavouriteProperty {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "idProperty")
    private Property idProperty;

    @ManyToOne
    @JoinColumn(name = "idUser")
    private User idUser;

    public FavouriteProperty() {
    }

    public FavouriteProperty(Long id, Property idProperty, User idUser) {
        this.id = id;
        this.idProperty = idProperty;
        this.idUser = idUser;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Property getIdProperty() {
        return idProperty;
    }

    public void setIdProperty(Property idProperty) {
        this.idProperty = idProperty;
    }

    public User getIdUser() {
        return idUser;
    }

    public void setIdUser(User idUser) {
        this.idUser = idUser;
    }
}
