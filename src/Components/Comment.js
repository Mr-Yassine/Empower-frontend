import React from 'react';
import '../css/Components.css';

const Comment = () => {

    return (
        <div className="comments">

            <div className="author_C d-flex" >
                <img className="img-fluid" src="images/me.jpg" alt="author" /> &nbsp;
                <p> Yassine BILAL </p>
            </div>

            <div className="comment">
                <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates modi inventore asperiores sapiente in ab excepturi doloremque! Inventore in esse odit recusandae quam dolorem sunt eos, magni rerum suscipit voluptatibus!
                </p>
            </div>

            <hr className="cmnt-hr" />
        </div>
    )

}

export default Comment
