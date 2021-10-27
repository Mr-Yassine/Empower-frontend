import React from 'react'
import "../css/Components.css"
import {Link} from 'react-router-dom'

const Feedback = () => {
    return (
        <div className="feedback">


            <p className="title"> Students Feedback</p>

            <div className="rating">

                <div className="note">
                    <p>4,5</p>
                </div>

                <div className="star_rating">
                    <i className="bi bi-star-fill"></i>
                    <p>Course Rating</p>
                </div>

            </div>

            <div className="form-group d-flex" id="cm_input" >
                <input type="text" className="form-control" placeholder="Comment" />
                <Link type="submit" className="button">Submit</Link>
            </div>


        </div>
    )
}

export default Feedback
