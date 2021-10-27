import React from 'react'
import CourseP from '../Components/CourseP'
import FormationDesc from '../Components/FormationDesc';
import Accordion from '../Components/Accordion';
import Instructors from "../Components/Instructors";
import Comment from '../Components/Comment';
import Feedback from '../Components/Feedback';

import '../App.css'



const Formation = () => {
    return (

        <div className="formation_page">

            <CourseP />

            <FormationDesc />

            <Accordion />

            <Instructors />

            <Feedback />

            <Comment />
            <Comment />
            <Comment />

        </div>
    )
}

export default Formation
