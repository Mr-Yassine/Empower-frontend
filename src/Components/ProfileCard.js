import React from 'react'
import '../css/Components.css';



const ProfileCard = () => {
    return (
        <div className="card" id="profileCard">

            <form action="#">
                <div className="pers-inf">

                    <div className="profile-pic">
                        <img className="img-fluid" src="images/me.jpg" alt="cap"/>
                    </div>

                    <div className="inf">

                                    

                            <div className="inputs">
                                <div className="prf_input d-flex">
                                    <input type="text" className="form-control" placeholder="First Name" value="Yassine" />
                                </div>
                        
                                <div className="prf_input d-flex">
                                    <input type="text" class="form-control" placeholder="Last Name" value="BILAL" ></input>
                                </div>
                            </div>

                            <div className="inputs">
                                <div className="prf_input d-flex">
                                    <input type="text" className="form-control" placeholder="Username" value="yassineb" />
                                </div>

                                <div className="prf_input d-flex">
                                    <input type="tel" className="form-control" placeholder="Phone Number" value="06012345678" />
                                </div>
                        
                            </div>

                            <div className="inputs">
                                            
                                <div className="prf_input d-flex">
                                    <input type="email" className="form-control" placeholder="Email" value="yassine.bilal@gmail.com" ></input>
                                </div>
                                            
                            </div>

                    </div>
                            
                </div>



                <div className="bio">

                    <div className="form-group purple-border">
                        <label for="exampleFormControlTextarea4"><b> Description :</b></label>
                        <textarea 
                            className="form-control" 
                            id="exampleFormControlTextarea4" 
                            rows="5"
                            value="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima laboriosam maxime, similique ex iste possimus ullam ipsam optio consequatur laudantium cumque nesciunt dolorum distinctio? Corporis excepturi corrupti laudantium consectetur adipisci?">
                        </textarea>
                    </div>

                </div>

                <button type="submit" className="btn btn-primary" id="update_btn">Update</button>
            </form>

        </div>

    )
}

export default ProfileCard
