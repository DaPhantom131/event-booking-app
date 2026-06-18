import React from "react";
import { Link } from "react-router-dom";

const Navbar = () =>{
return(
    <React.Fragment>
        <h3>This is the Navigation bar</h3>

     <Link to={"/"}>Home</Link>

     <Link to={"/events"}>Events</Link>
     
    </React.Fragment>
)

}
export default Navbar