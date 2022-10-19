import React from "react";
import './Navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div>
            <ul>
                <Link to={'/'}>
                    <li>Home</li>
                </Link>

                <Link to={'/aboutus'}>
                    <li>AboutUs</li>
                </Link>
                <Link to={'/contactus'}>
                    <li>Contact Us</li>
                </Link>
            </ul>
        </div>
     );
}
 
export default Navbar;