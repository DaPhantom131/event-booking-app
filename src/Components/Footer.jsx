import React from "react";

const Footer = () =>{
    return(
        <React.Fragment>

           <footer>
        <img src="/Assets/Image/logo 2.png" alt="My Logo" width={200} />
                <p> &copy; {new Date().getFullYear()} ALL RIGHTS RESERVED.</p>
           </footer>

        </React.Fragment>
    )
}

export default Footer