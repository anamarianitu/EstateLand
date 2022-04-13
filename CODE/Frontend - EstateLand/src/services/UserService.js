import axios from "axios";
import AuthService from "./auth.service"

const API_URL = "http://localhost:8080/user/";
const API_FAVOURITE = "http://localhost:8080/favourite/";

class UserService {

    updatePersonal(currentUsername, newUsername, newEmail, newFirstName, newLastName) {
        return axios({
            method: 'post',
            url: API_URL + "update",
            headers: { 'Authorization': 'Bearer ' + AuthService.getCurrentToken() },
            params: {
                currentUsername: currentUsername,
                username: newUsername,
                email: newEmail,
                firstName: newFirstName,
                lastName: newLastName
            }
        })
            .then(response => {
                if (response.data) {

                    var loggedInUser =
                    {
                        firstName: response.data.firstName,
                        lastName: response.data.lastName,
                        username: response.data.username,
                        email: response.data.email,
                        joinDate: response.data.joinDate,
                    }
                    localStorage.setItem("user", JSON.stringify(loggedInUser));
                    localStorage.setItem("token", JSON.stringify(response.headers["jwt-token"]));
                }
                return response.data
            });
    }

    resetPasswordWithEmail(email) {
        return axios({
            method: 'get',
            url: API_URL + `resetPassword/${email}`
        })
            .then(response => {
                if (response.data) {
                    return response.data
                }
            });
    }

    getAllUsers(setData) {
        axios.get(API_URL + "allUsers").then((response) => {
            setData(response.data);
        });
    }

    getAllAdmins(setData) {
        axios.get(API_URL + "allAdmins").then((response) => {
            setData(response.data);
        });
    }

    getAllAgents(setData) {
        axios.get(API_URL + "allAgents").then((response) => {
            setData(response.data);
        });
    }

    getTotalNrRegisteredUsers(setTotalNrRegisteredUsers) {
        axios.get(API_URL + `nrRegisteredUsers`)
            .then(res => {
                const found = res.data;
                setTotalNrRegisteredUsers(found);
                return res.data
            })
    }

    addNewAdmin(firstName, lastName, username, email, isActive, isNotLocked) {
        const params = new URLSearchParams({
            firstName: firstName,
            lastName: lastName,
            username: username,
            email: email,
            role: "ROLE_ADMIN",
            isActive: isActive,
            isNotLocked: isNotLocked
        }).toString();

        axios
            .post(API_URL + "add?" + params, {}, {
                headers: {
                }
            })
            .catch(err => {
                console.log(err);
            });
    }

    addNewAgent(firstName, lastName, username, email, isActive, isNotLocked) {
        const params = new URLSearchParams({
            firstName: firstName,
            lastName: lastName,
            username: username,
            email: email,
            role: "ROLE_AGENT",
            isActive: isActive,
            isNotLocked: isNotLocked
        }).toString();

        axios
            .post(API_URL + "add?" + params, {}, {
                headers: {
                }
            })
            .catch(err => {
                console.log(err);
            });
    }

    getUserById(id, setUser) {
        axios.get(API_URL + `${id}`)
            .then(res => {
                const found = res.data;
                setUser(found);
            })
    }

    updateUserComplex(currentUsername, firstName, lastName, username, email, role, isActive, isNotLocked) {
        const params = new URLSearchParams({
            currentUsername: currentUsername,
            firstName: firstName,
            lastName: lastName,
            username: username,
            email: email,
            role: role,
            isActive: isActive,
            isNotLocked: isNotLocked
        }).toString();

        axios
            .post(API_URL + "updateComplex?" + params, {}, {
                headers: {
                }
            })
            .catch(err => {
                console.log(err);
            });
    }

    deleteUser(id) {
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

    getLast5UsersRegistered(setUsers) {
        axios.get(API_URL + "last5Users").then((response) => {
            setUsers(response.data);
        });
    }

    addPropertyToFavourites(idProperty, idUser) {
        axios({
            method: 'post',
            url: API_FAVOURITE + "addFavouriteProperty",
            headers: {},
            data: {
                idProperty: {
                    id: idProperty
                },
                idUser: {
                    id: idUser
                }
            }
        })
    }

    getAllFavouritePropertiesByUser(id, setData) {
        return axios({
            method: 'get',
            url: API_FAVOURITE + `allFavouriteOfUser/${id}`
        })
            .then(response => {
                if (response.data) {
                    setData(response.data);
                }
            });
    }

    nrFavouritesOfUser(id, setData){
        return axios({
            method: 'get',
            url: API_FAVOURITE + `nrFavouritesOfUser/${id}`
        })
            .then(response => {
                if (response.data) {
                    setData(response.data);
                }
            });
    }

    removePropertyFromSaved(idFavourite){
        axios({
            method: 'delete',
            url: API_FAVOURITE + `delete/${idFavourite}`,
            headers: {}
        })
            .then(response => {
                if (response.data) {
                    return response.data
                }
            });
    }
}

export default new UserService();