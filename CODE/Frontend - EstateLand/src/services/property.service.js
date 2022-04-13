import axios from "axios";

const API_URL = "http://localhost:8080/property";

class PropertyService {

    getAllProperties(setPropertiesList) {
        return axios.get(API_URL + "/allProperties").then((response) => {
            setPropertiesList(response.data);
        });
    }

    addProperty(title, description, price, available, capacity, rentSale, type,
        nrRooms, nrBathrooms, floor, squareMeters, country, city, street, number, postcode) {
        axios({
            method: 'post',
            url: API_URL + "/addProperty",
            headers: {},
            data: {
                title: title,
                description: description,
                price: price,
                available: available,
                capacity: capacity,
                rentSale: rentSale,
                type: type,
                nrRooms: nrRooms,
                nrBathrooms: nrBathrooms,
                floor: floor,
                squareMeters: squareMeters,
                country: country,
                city: city,
                street: street,
                number: number,
                postcode: postcode
            }
        })
    }

    getPropertyById(id, setProperty) {
        axios.get(API_URL + `/${id}`)
            .then(res => {
                const found = res.data;
                setProperty(found);
                return res.data
            })
    }

    deleteProperty(id) {
        axios({
            method: 'delete',
            url: API_URL + `delete/${id}`,
            headers: {}
        })
            .then(response => {
                if (response.data) {
                    return response.data
                }
            });
    }

    getNrOfPropertiesForRent(setNrPropertiesRent) {
        axios.get(API_URL + "/nrPropertiesRent")
            .then(res => {
                const found = res.data;
                setNrPropertiesRent(found);
            })
    }

    getNrOfPropertiesForSale(setNrPropertiesSale) {
        axios.get(API_URL + "/nrPropertiesSale")
            .then(res => {
                const found = res.data;
                setNrPropertiesSale(found);
            })
    }

    getNrOfPropertiesByType(type, setNrType) {
        return axios({
            method: 'post',
            url: API_URL + '/nrPropertiesPerType',
            params: {
                type: type
            }
        })
            .then(response => {
                const found = response.data;
                setNrType(found);
            });
    }

    getNrOfPropertiesPerCity(city, setNrCity) {
        return axios({
            method: 'post',
            url: API_URL + '/nrPropertiesPerCity',
            params: {
                city: city
            }
        })
            .then(response => {
                const found = response.data;
                setNrCity(found);
            });
    }

    getTotalNrAvailableProperties(setTotalNrAvailableProperties) {
        axios.get(API_URL + `/nrAvailableProperties`)
            .then(res => {
                const found = res.data;
                setTotalNrAvailableProperties(found);
                return res.data
            })
    }

    getListPropertiesByRentSale(rentSale, setRentSale) {
        return axios({
            method: 'post',
            url: API_URL + '/listPropertiesByRentSale',
            params: {
                rentSale: rentSale
            }
        })
            .then(response => {
                const found = response.data;
                setRentSale(found);
            });
    }

    getListPropertiesByType(type, setType) {
        return axios({
            method: 'post',
            url: API_URL + '/listPropertiesByType',
            params: {
                type: type
            }
        })
            .then(response => {
                const found = response.data;
                setType(found);
            });
    }

    updateProperty(currentId, title, description, price, available, capacity, rentSale, type,
        nrRooms, nrBathrooms, floor, squareMeters, country, city, street, postcode, number) {
        const params = new URLSearchParams({
            currentId: currentId,
            title: title,
            description: description,
            price: price,
            available: available,
            capacity: capacity,
            rentSale: rentSale,
            type: type,
            nrRooms: nrRooms,
            nrBathrooms: nrBathrooms,
            floor: floor,
            squareMeters: squareMeters,
            country: country,
            city: city,
            street: street,
            postcode: postcode,
            number: number
        }).toString();

        axios
            .post(API_URL + "/update?" + params, {}, {
                headers: {
                }
            })
            .catch(err => {
                console.log(err);
            });
    }

}

export default new PropertyService();