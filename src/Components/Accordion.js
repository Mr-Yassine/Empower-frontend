import React from 'react'
import '../css/Components.css'
import {Link} from 'react-router-dom';

const Accordion = () => {
    return (

        <div className="Accordion">

            <p className="title"> Course content</p>
            
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                  Introduction to the course
                </button>
              </h2>
              <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                <div className="accordion-body">
                    <div className="courses">
                        <ul>
                            <li> <Link to=""><i className="bi bi-play-fill"></i> Introduction to the course </Link> </li>
                            <li> <Link to=""><i className="bi bi-play-fill"></i> Introduction to the course </Link> </li>
                            <li> <Link to=""><i className="bi bi-play-fill"></i> Introduction to the course </Link> </li>       
                        </ul>
                    </div>
                </div>
              </div>
            </div>


            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                  Introduction to the course
                </button>
              </h2>
              <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                <div className="accordion-body">
                    <div className="courses">
                        <ul>
                            <li> <Link to=""><i className="bi bi-play-fill"></i> Introduction to the course </Link> </li>
                            <li> <Link to=""><i className="bi bi-play-fill"></i> Introduction to the course </Link> </li>
                            <li> <Link to=""><i className="bi bi-play-fill"></i> Introduction to the course </Link> </li>       
                        </ul>
                    </div>
                </div>
              </div>
            </div>


            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                  Introduction to the course
                </button>
              </h2>
              <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                <div className="accordion-body">
                    <div className="courses">
                        <ul>
                            <li> <Link to=""><i className="bi bi-play-fill"></i> Introduction to the course </Link> </li>
                            <li> <Link to=""><i className="bi bi-play-fill"></i> Introduction to the course </Link> </li>
                            <li> <Link to=""><i className="bi bi-play-fill"></i> Introduction to the course </Link> </li>       
                        </ul>
                    </div>
                </div>
              </div>
            </div>


            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                  Introduction to the course
                </button>
              </h2>
              <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                <div className="accordion-body">
                    <div className="courses">
                        <ul>
                            <li> <Link to=""><i className="bi bi-play-fill"></i> Introduction to the course </Link> </li>
                            <li> <Link to=""><i className="bi bi-play-fill"></i> Introduction to the course </Link> </li>
                            <li> <Link to=""><i className="bi bi-play-fill"></i> Introduction to the course </Link> </li>       
                        </ul>
                    </div>
                </div>
              </div>
            </div>

        </div>
    )
}

export default Accordion
