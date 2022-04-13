import axios from "axios";

const API_URL = "http://localhost:8080/contact/";

class ContactService {

    getAllContactForms(setData) {
        axios.get(API_URL + "allContactForms").then((response) => {
            setData(response.data);
        });
    }

    addContactForm(title, userEmail, userPhone, message) {
        return axios({
            method: 'post',
            url: API_URL + "addContactForm",
            headers: {},
            data: {
                // This is the body part
                title: title,
                userEmail: userEmail,
                userPhone: userPhone,
                message: message,
            }
        }).then(response => {
            if (response.data) {
                return response.data
            }
        });
    }

    deleteContactForm(id) {
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

    getContactFormById(id, setContactForm) {
        axios.get(API_URL + `${id}`)
            .then(res => {
                const found = res.data;
                setContactForm(found);
                return res.data
            })
    }
}

export default new ContactService();