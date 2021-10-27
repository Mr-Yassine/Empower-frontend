import React from 'react'
import '../css/Courses.css';



const Courses = () => {

    return (
        <div>
            
            <section>
                <h2 className="title">x</h2>
                <div className="container">


                    <div id="video_player">
                        <video controls id="main-Video" src=""></video>
                    </div>


                    <div className="playlistBx">
                        <div className="header">
                            <div className="row">
                                <span className="AllLessons"></span>
                            </div>
                        </div>
                        <ul className="playlist" id="playlist">  
                        </ul>
                        
                        

                    </div>
                    
                </div>
            </section>

        </div>
    )
}

export default Courses

