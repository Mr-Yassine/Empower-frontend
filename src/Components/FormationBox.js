import React from 'react';
import '../css/Components.css';


const FormationBox = () => {
    return (
            
            <div className="formation-box">
                    
                <div className="formation-left">

                    <img className="img-fluid rounded-0" src="images/1.jpg" alt="cap"/>
                        
                </div>

                <div className="formation-right">

                    <div className="title">

                        <p className="formation-title"> <b>Lorem ipsum dolor sit amet, consectetur adipiscing.</b></p>

                        <p> <b>12 $</b></p>
                            
                    </div>


                    <div className="formation-description">
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing. Lorem ipsum dolor sit amet, consectetur
                            adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing. Lorem ipsum dolor sit amet, 
                            consectetur adipiscing..
                        </p>
                    </div>


                    <div className="bottom">

                        <div className="author d-flex" >
                            <img className="img-fluid" src="images/me.jpg" alt="author"/> &nbsp;
                            <p>Yassine BILAL</p>
                        </div>

                        <div className="icons">
                            <ul className='d-flex justify-content-between'>
                                <li><i className="bi bi-star color: #F78401;"></i> 4.5</li>
                                <li><i className="bi bi-book color: #1FAE90;"></i> Lesson </li>
                                <li><i className="bi bi-clock-history color:"></i> 3 Hours</li>       
                            </ul>
                        </div>
                            

                    </div>
                        
                </div>
            </div>

    )
}

export default FormationBox
