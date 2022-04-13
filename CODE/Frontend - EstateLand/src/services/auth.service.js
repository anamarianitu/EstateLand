import axios from "axios";

const API_URL = "http://localhost:8080/user/";

class AuthService {
    login(username, password) {
        return axios
            .post(API_URL + "login", {
                username,
                password
            })
            .then(response => {
                if (response.data) {
                    var loggedInUser =
                    {
                        id: response.data.id,
                        firstName: response.data.firstName,
                        lastName: response.data.lastName,
                        username: response.data.username,
                        email: response.data.email,
                        role: response.data.role,
                        joinDate: response.data.joinDate,
                    }
                    localStorage.setItem("user", JSON.stringify(loggedInUser));
                    localStorage.setItem("token", JSON.stringify(response.headers["jwt-token"]));
                }

                return response.data;
            });

    }

    logout() {
        window.location.href = "/";
        localStorage.removeItem("user");
        localStorage.removeItem("token");
    }

    logoutAdmin() {
        window.location.href = "/admin";
        localStorage.removeItem("admin");
        localStorage.removeItem("admin-token");
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }

    getCurrentToken() {
        return JSON.parse(localStorage.getItem('token'));
    }

    getCurrentAdmin() {
        return JSON.parse(localStorage.getItem('admin'));
    }

    getSetAdminLocalStorage(setAdmin){
        setAdmin(JSON.parse(localStorage.getItem('admin')));
    }

    getSetUserLocalStorage(setUser){
        setUser(JSON.parse(localStorage.getItem('user')));
    }

    loginAdmin(username, password) {
        return axios
            .post(API_URL + "login", {
                username,
                password
            })
            .then(response => {
                if (response.data.role === "ROLE_ADMIN") {
                    var loggedInAdmin =
                    {
                        firstName: response.data.firstName,
                        lastName: response.data.lastName,
                        username: response.data.username,
                        email: response.data.email,
                        role: response.data.role,
                        joinDate: response.data.joinDate,
                    }
                    localStorage.setItem("admin", JSON.stringify(loggedInAdmin));
                    localStorage.setItem("admin-token", JSON.stringify(response.headers["jwt-token"]));
                    return response.data;
                }
                else {
                    return false;
                }
            });
    }
}

export default new AuthService();