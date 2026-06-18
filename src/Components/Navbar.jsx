import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";

const Navbar = () =>{
return(
    <React.Fragment>
        <nav className="header">

            <div className="nav-logo">My Logo</div>

                <div className="nav-links">

                    <Link to={"/"} className="links">Home</Link>

                    <Link to={"/events"} className="links">Events</Link>

                    <Link to={"/bookings"} className="links">Bookings</Link>

                </div>

        </nav>

    </React.Fragment>
)

}
export default Navbar