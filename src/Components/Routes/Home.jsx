import React from "react";
import { Link } from "react-router-dom";

const Home = () =>{
    return(
        <React.Fragment>


            <main>

                <img src="/Assets/Image/Hero2.5.jpg" alt="" width={"100%"}/>

                <div className="main-content">
                    <h1>D Event Booking</h1>
                    <h2>Discover and Book Amazing Events</h2>
                    <p>Browse upcoming tech, music, business and entertainment events</p>

                   <button className="main-btn">
                    <Link to={"/events"} className="main-link">View Events</Link>
                   </button>

                </div>

            </main>

            <section>
                <h3>About Us</h3>
            </section>



        </React.Fragment>
    )
}
export default Home