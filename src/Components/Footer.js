import React from 'react'
import '../css/Components.css';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
            <footer className="footer">
                <div className="l-footer">
                    <h1>Empower Skills</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam atque recusandae in sit sunt molestiae aliquid fugit. Mollitia eaque tempore iure sit nobis? Vitae nemo, optio maiores numquam quis recusandae.
                    </p>
                </div>

                <ul className="r-footer">

                    <li className="features">
                        <h2><b>Quick Links</b></h2>
                        <ul className="box h-box">
                            <li><Link to="/Profile">About</Link></li>
                            <li><Link to="/Courses">Courses</Link></li>
                            <li><Link to="/Contact">Contact</Link></li>
                        </ul>
                    </li>

                    <li>
                        <h2><b>Contact</b></h2>
                        <ul className="box">
                            <li>
                                <Link href="tel:060707070">+212 67070070</Link>
                            </li>
                            <li>
                                <Link href="mailto:empower@contact.com">empower@contact.com</Link>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <h2><b>Follow Us</b></h2>
                        <ul className="box d-flex justify-content-start">
                            <li><Link href="#"><i class="fa fa-facebook" aria-hidden="true"></i></Link></li>
                            <li><Link href="#"><i class="fa fa-twitter" aria-hidden="true"></i></Link></li>
                            <li><Link href="#"><i class="fa fa-youtube" aria-hidden="true"></i></Link></li>
                            <li><Link href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></Link></li>         
                        </ul>
                    </li>

                </ul>

                <hr/>

                <div className="b-footer">
                    <p> 2021 - <Link href="https://www.empower.ma">Empower Skills.</Link> All rights reserved</p>
                </div>
            </footer>
    )
}

export default Footer
