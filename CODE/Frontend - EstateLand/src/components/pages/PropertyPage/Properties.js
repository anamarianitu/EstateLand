import React, { useState, useEffect } from 'react'
import PropertyBox from '../../PropertyBox'
import "../../css/Property.css"
import propertyService from '../../../services/property.service';


function Properties() {

  const [propertiesList, setPropertiesList] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    propertyService.getAllProperties(setPropertiesList);
  }, []);

  if (!propertiesList) return null;

  const filterPropertiesByRentSale = (event) => {
    if (event.target.value === 'rent') {
      propertyService.getListPropertiesByRentSale('rent', setPropertiesList);
    }
    else if (event.target.value === 'sale') {
      propertyService.getListPropertiesByRentSale('sale', setPropertiesList);
    }
    else {
      propertyService.getAllProperties(setPropertiesList);
    }
  }

  const filterPropertiesByType = (event) => {
    if (event.target.value === 'house') {
      propertyService.getListPropertiesByType('house', setPropertiesList);
    }
    else if (event.target.value === 'apartment') {
      propertyService.getListPropertiesByType('apartment', setPropertiesList);
    }
    else if (event.target.value === 'studio') {
      propertyService.getListPropertiesByType('studio', setPropertiesList);
    }
    else {
      propertyService.getAllProperties(setPropertiesList);
    }
  }


  return (
    <div>
      <div className="propertySearchFilter text-center">
        <div>
          <input className="propertySearchInput" type="text" placeholder="Search..." onChange={(event) => {
            setSearchTerm(event.target.value);
          }}></input>
        </div>
      </div>

      <div className="filterBar">
        <div>
          <label style={{ color: 'black' }}>Filter by Rent/Sale: </label>
          <select className="filterPropertiesSelectInput" onChange={filterPropertiesByRentSale}>
            <option className='filterRentSaleOptions' value="all">All</option>
            <option className='filterRentSaleOptions' value="rent">Rent</option>
            <option className='filterRentSaleOptions' value="sale">Sale</option>
          </select>
        </div>

        <div>
          <label style={{ color: 'black' }}>Filter by Type: </label>
          <select className="filterPropertiesSelectInput" onChange={filterPropertiesByType}>
            <option className='filterRentSaleOptions' value="all">All</option>
            <option className='filterRentSaleOptions' value="house">House</option>
            <option className='filterRentSaleOptions' value="apartment">Apartment</option>
            <option className='filterRentSaleOptions' value="studio">Studio</option>
          </select>
        </div>


      </div>

      {propertiesList.filter((item) => {
        if (searchTerm === "") {
          return item;
        } else if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
          return item;
        }
      }).map(item => <PropertyBox key={item.id} idProperty={item.id} title={item.title} price={item.price} city={item.city} country={item.country} street={item.street} postcode={item.postcode} number={item.number} squareMeters={item.squareMeters} nrBedrooms={item.nrBedrooms} nrBathrooms={item.nrBathrooms} rentSale={item.rentSale}/>)}

    </div>
  )
}

export default Properties
