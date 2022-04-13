import axios from "axios";

const API_URL = "http://localhost:8080/viewing/";

class ViewingsService {

    getAllViewings(setData) {
        axios.get(API_URL + "allViewings").then((response) => {
            setData(response.data);
        });
    }

    getViewingById(id, setViewing) {
        axios.get(API_URL + `${id}`)
            .then(res => {
                const found = res.data;
                setViewing(found);
                return res.data
            })
    }

    getPropertyFromViewing(id, setProperty) {
        axios.get(API_URL + `getProperty/${id}`)
            .then(res => {
                const found = res.data;
                setProperty(found);
                return res.data
            })
    }

    getNrViewingsForProperty(id, setNrViewingsForProperty) {
        axios.get(API_URL + `nrViewingsForProperty/${id}`)
            .then(res => {
                const found = res.data;
                setNrViewingsForProperty(found);
                return res.data
            })
    }

    getLast5Viewings(setViewings) {
        axios.get(API_URL + "last5Viewings").then((response) => {
            setViewings(response.data);
        });
    }

    getTotalNrViewings(setTotalNrViewings) {
        axios.get(API_URL + `nrViewings`)
            .then(res => {
                const found = res.data;
                setTotalNrViewings(found);
                return res.data
            })
    }

    addViewing(propertyId, userEmail, userPhone, date, timeDisponibility, message) {
        return axios({
            method: 'post',
            url: API_URL + "addViewing",
            headers: {},
            data: {
                // This is the body part
                userEmail: userEmail,
                userPhone: userPhone,
                date: date,
                timeDisponibility: timeDisponibility,
                message: message,
                propertyId: {
                    id: propertyId
                }
            }
        }).then(response => {
            if (response.data) {
                return response.data
            }
        });
    }

    deleteViewing(id) {
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

}

export default new ViewingsService();