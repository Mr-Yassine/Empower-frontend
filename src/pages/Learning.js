import React from 'react'
import FormationBox from '../Components/FormationBox';
import '../css/Learning.css';

const Learning = () => {
    return (



        <div className="course-container">
                
            <h1> My Learing </h1>



            <div className="top">
                    
                <form className="search">
                    <div className="input-group">
                        <input type="search" className="form-control" placeholder="Search"/>
                    </div>
                </form>

                <form class="filtre" action="">

                    <label>Sort By:</label>

                    <select className="form-select" aria-label="Default select example">
                        <option selected>Date</option>
                        <option value="1">Title</option>
                        <option value="2">Price</option>
                    </select>
                </form>

            </div>


            <FormationBox />

            <FormationBox />

            <FormationBox />    
                

        </div>
                  

    )
}

export default Learning
