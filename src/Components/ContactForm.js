import React from 'react'
import "../css/Components.css"
import { Link } from "react-router-dom";


const contactForm = () => {
    return (
        
        <div className="contact-box">
            
            <div className="contact-left">

                <h1> Contact Us</h1>

                <form className="contact_form">

                    <div className="input-row">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Email" />
                    </div>

                    <div className="input-row">
                        <label>Message</label>
                        <textarea rows="5" className="form-control" placeholder="Message"></textarea>
                    </div>

                    <button type="button" className="btn btn-info btn-lg">Send Message</button>

                </form>
            </div>

            <div className="contact-right">

                <h2> Contact Information</h2>

                <p>Fill up the form and our Team will get back 
                    to you within 24 hours.
                </p>

                <ul className="contact-inf">
                    <li>
                        <i className="fas fa-phone"></i>&nbsp;<a href="tel:060707070"> +(212) 67070070</a>
                    </li>
                    <li>
                        <i className="fas fa-envelope"></i>&nbsp;<a href="mailto:empower@contact.com"> empower@contact.com</a>
                    </li>
                </ul>

                <ul className="social-media">
                    <li><Link to="#"><i className="fa fa-facebook" aria-hidden="true"></i></Link></li>
                    <li><Link to="#"><i className="fa fa-youtube" aria-hidden="true"></i></Link></li>
                    <li><Link to="#"><i className="fa fa-twitter" aria-hidden="true"></i></Link></li>
                    <li><Link to="#"><i className="fa fa-linkedin" aria-hidden="true"></i></Link></li>         
                </ul>
            </div>
        </div>

    )
}

export default contactForm
