import React from 'react'
import { Link } from "react-router-dom";
import '../css/Profile.css';
import FormationList from '../Components/FormationList';
import AddFor from '../Components/AddFor';



const Profile = () => {
    return (
        
        <div>
            <div class="profile-container">

                <h1> My Profile </h1>



                <div class="top">

                    <div class="top-nav">
                        <Link to="./Profile" type="button" class="btn btn-info" name="Information">Information</Link>
                        <Link to="./Notifications" type="button" class="btn btn-info" name="Notifications">Notifications</Link>
                        <Link to="./AddFormation" type="button" class="btn btn-info active-link" name="Formation">Formations</Link>
                    </div>

                    <hr class="nav-hr" />
                    
                </div>

                <div class="prf-body">

                    <div class="col">
                        <div class="d-flex justify-content-between">
                            <h1>Add a Course</h1>
                        </div>
                        <AddFor />
                        
                    </div>

                    <div class="col">
                        <div class="d-flex justify-content-between">
                            <h1>List of all Courses</h1>
                        </div>

                        <FormationList />
                    </div>
                    

                </div>
                
            </div>
            

        </div>

            
    )
}

export default Profile
