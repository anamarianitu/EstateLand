package com.estate.demo.repository;

import com.estate.demo.model.FavouriteProperty;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FavouritePropertyRepository extends JpaRepository<FavouriteProperty, Long> {
}
