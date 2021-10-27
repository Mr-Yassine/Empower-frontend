import React from 'react'
import { Link } from "react-router-dom";
import '../css/Profile.css';
import ProfileCard from '../Components/ProfileCard';





const Profile = () => {
    return (
        
        <div>
            <div class="profile-container">

                <h1> My Profile </h1>



                <div class="top">

                    <div class="top-nav">
                        <Link to="./Profile" type="button" class="btn btn-info active-link" name="Information">Information</Link>
                        <Link to="./Notifications" type="button" class="btn btn-info" name="Notifications">Notifications</Link>
                    </div>

                    <hr class="nav-hr" />
                    
                </div>

                <div class="prf-body">

                    <ProfileCard />

                </div>
                
            </div>
            

        </div>

            
    )
}

export default Profile
