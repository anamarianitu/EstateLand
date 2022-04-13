import React, { useState, useEffect } from 'react';
import "./MyProfile.css";
import AuthService from "../../../services/auth.service";
import UserService from "../../../services/UserService";
import Button from '@mui/material/Button';
import SavedPropertyBox from '../PropertyPage/SavedPropertyBox';


function MyProfile() {

    const [currentUser, setCurrentUser] = useState(AuthService.getCurrentUser());
    const [savedPropertiesList, setSavedPropertiesList] = useState(null);
    const [nrFavourites, setNrFavourites] = useState(0);

    useEffect(() => {
        UserService.getAllFavouritePropertiesByUser(currentUser.id, setSavedPropertiesList);
        UserService.nrFavouritesOfUser(currentUser.id, setNrFavourites);
    }, []);
    if (!savedPropertiesList) return null;


    const removeFromSaved = (id) => {
        setSavedPropertiesList(savedPropertiesList.filter((item) => item.id !== id));
        UserService.removePropertyFromSaved(id);
    }

    return (
        <>
            <div className="myProfilePage">
                <div className="myProfileContainer">
                    <div className="profileLeft">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/d/d2/Crystal_Clear_kdm_user_female.svg"
                            alt="user" width="100"></img>
                        <h4>{currentUser.firstName} {currentUser.lastName}</h4>
                        <p>User</p>
                    </div>
                    <div className="profileRight">
                        <div className="profileInfo">
                            <h3>Information</h3>
                            <div className="info_data">
                                <div className="data">
                                    <h4>Email</h4>
                                    <p>{currentUser.email}</p>
                                </div>
                                <div className="data">
                                    <h4>Username</h4>
                                    <p>{currentUser.username}</p>
                                </div>
                            </div>
                        </div>

                        <div className="projects">
                            <h3>Activity</h3>
                            <div className="projects_data">
                                <div className="data">
                                    <h4>Saved Properties</h4>
                                    <p>{nrFavourites}</p>
                                </div>
                                <div className="data">
                                    <h4>Role</h4>
                                    <p>{currentUser.role}</p>
                                </div>
                            </div>
                        </div>

                        <div className="social_media">
                            <ul>
                                <Button variant="contained" href="/myProfile/update" color="success" className="profileButton">
                                    Update Profile
                                </Button>
                                <Button variant="contained" href="/myProfile/reset" color="success" className="profileButton">
                                    Reset Password
                                </Button>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
            <div>
                <div className="mySavedPropertiesTitleContainer">
                    <h1 className="mySavedPropertiesTitle">My Saved Properties</h1>

                </div>

                <div className='packagesContainer'>
                    {savedPropertiesList.map(item => <SavedPropertyBox key={item.id} idProperty={item.idProperty.id} title={item.idProperty.title}
                        onClick={() => {
                            const confirmBox = window.confirm(
                                "Do you really want to remove this property from saved?"
                            )
                            if (confirmBox === true) {
                                removeFromSaved(item.id)
                            }
                        }}
                         />)}

                </div>

            </div>

        </>

    )
}

export default MyProfile
