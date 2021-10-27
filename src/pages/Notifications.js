import React from 'react';
import { Link } from "react-router-dom";
import NotCard from '../Components/NotCard';
import '../css/Profile.css';




const Notifications = () => {
    return (
        
        <div>
            <div class="profile-container">

                <h1> My Profile </h1>



                <div class="top">

                    <div class="top-nav">
                        <Link to="./Profile" type="button" class="btn btn-info" name="Information">Information</Link>
                        <Link to="./Notifications" type="button" class="btn btn-info active-link" name="Notifications">Notifications</Link>
                    </div>

                    <hr class="nav-hr" />
                    
                </div>

                <div class="not-body">

                    <NotCard />

                    <NotCard />

                    <NotCard />

                </div>  
                
            </div>

        </div>   
    )
}

export default Notifications
