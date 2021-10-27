import React from 'react'
import "../css/Components.css"


const Instructors = () => {
    return (



        <div className="Instructors">

            <div className="d-flex" >
                <div className="author_img">
                    <img className="img-fluid" src="images/me.jpg" alt="author" /> &nbsp;
                </div>
        
                <div className="abt_author">
                    <p className="authorName">Yassine BILAL</p>
                    <p className="authorJob">A Full-stack Developer & Teacher</p>
                </div>
            </div>


            <div className="author_desc">

                <p>4 Courses</p>
                <p>
                    I'm Andrew, a full-stack developer living in beautiful Philadelphia!

                    I launched my first Udemy course in 2014 and had a blast teaching and helping others. Since then, I've launched 3 courses with over 110,000 students and over 18,000 5-star reviews.

                    I currently teach JavaScript, React, and Node.

                    Before I ever heard about Udemy or thought about teaching, I created a web app development company. I've helped companies of all sizes launch production web applications to their customers. I've had the honor of working with awesome companies like Siemens, Mixergy, and Parkloco.

                    I have a Computer Science degree from Temple University, and I've been programming for just over a decade. I love creating, programming, launching, learning, teaching, and biking.

                    I can't wait to see you inside one of my courses!
                </p>
            </div>


        </div>
    )
}

export default Instructors
