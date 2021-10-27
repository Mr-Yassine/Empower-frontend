import { BrowserRouter as Link, NavLink } from "react-router-dom";
import '../css/Navbar.css';

const Navbar = () => {
    return (

            <nav className="navbar navbar-expand-lg navbar-light  z-index-3 w-100 bg-white" >
                <div className="container">
                    <Link to="/">
                        <img src="LOGO.png" width="50px" alt="" />
                    </Link>
                    
                    <button className="navbar-toggler shadow-none border-0 ms-2" type="button" data-toggle="collapse"
                        data-target="#navigation" aria-controls="navigation" aria-expanded="false"
                    aria-label="Toggle navigation">

                    {/* <button class="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}"> */}

                        <span className="navbar-toggler-icon mt-2">
                            <span className="navbar-toggler-bar bar1"></span>
                            <span className="navbar-toggler-bar bar2"></span>
                            <span className="navbar-toggler-bar bar3"></span>
                        </span>
                    </button>

                    <div className="navbar  collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0 " id="navigation" >
                        <ul className="navbar-nav navbar-nav-hover nav_list">
                            <li className="nav-item mx-2 ">
                                <NavLink to="#"  className="nav-link link-navbar Active-link-navbar">
                                    Home
                                </NavLink>
                            </li>

                            <li className="nav-item mx-2">
                                <NavLink to="/Courses"  className="nav-link link-navbar">
                                    Courses
                                </NavLink>
                            </li>

                            <li className="nav-item mx-2">
                                <NavLink to="/Formation"  className="nav-link link-navbar">
                                    About
                                </NavLink>
                            </li>

                            <li className="nav-item mx-2">
                                <NavLink to="/Formateur"  className="nav-link link-navbar">
                                    Formateur
                                </NavLink>
                            </li>

                            <li className="nav-item mx-2">
                                <NavLink to="/Contact"  className="nav-link link-navbar">
                                    Contact
                                </NavLink>
                            </li>

                        </ul>
        
                        <ul className="navbar-nav ">
                            <li className="nav-item ">
                                <NavLink to="/Learning" className="nav-link link-navbar">
                                    Teach on
                                </NavLink>
                            </li>
                        
                            <li className="nav-item">
                                <NavLink to="/Profile" className="btn btn-white me-1 signup">
                                    Sign in
                                </NavLink>
                            </li>
            
                            <li className="nav-item">
                                <NavLink to="/Notifications" className="btn btn-primary  mb-0 me-1 login">
                                    Sign up
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    );
}
 
export default Navbar;