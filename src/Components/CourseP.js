import React from 'react'
import '../css/Components.css'
import {Link} from 'react-router-dom';

const CourseP = () => {
    return (

        <div>

            <div className="formation-header">

                <div className="container">

                    <p className="title_f">
                        Next.js & React - The Complete Guide (incl. Two Paths!)
                    </p>

                    <p className="brief_d">
                        Learn NextJS from the ground up and build production-ready, fullstack ReactJS
                        apps with the NextJS framework! Learn NextJS from the ground up and build, 
                        fullstack ReactJS apps with the NextJS framewor
                    </p>

                    <div className="rating_f">
                        <i className="bi bi-star"> 4,5</i> &nbsp;
                        <p> (436 Rating) From 1908 Student </p>
                    </div>

                    <div className="created_by">
                        <p> Created by <Link to="#">Yassine BILAL</Link> </p>
                    </div>

                    <div className="f_button">
                        <Link type="button" class="btn btn-primary"><i className="bi bi-heart"> Like</i></Link>
                        <Link type="button" class="btn btn-primary"><i className="bi bi-share-fill"> Share</i></Link>
                    </div>
                </div>


            </div>

            <div className="card" id="course_card">
                <img className="card-img-top" src="/images/1.jpg" alt="Card" />
                <div className="card-body">

                    <h1 className="card-price" id="card-price">$89.99</h1>

                    <Link to="#" class="btn btn-info btn-lg">Buy Now</Link>
                    
                    <h6 className="card-title" id="card-title">This course include</h6>

                    <div className="course-D" id="course-D">
                        <ul>
                            <li><i className="bi bi-display"></i> 25 hours on-demand video</li>
                            <li><i className="bi bi-file-earmark"></i> 20 articles </li>
                            <li><i className="bi bi-file-earmark"></i> Full lifetime access</li>       
                        </ul>
                    </div>
                    
                </div>
            </div>

        </div>
    )
}

export default CourseP
