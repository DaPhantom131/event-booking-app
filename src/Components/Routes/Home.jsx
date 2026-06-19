import React from "react";
import { Link } from "react-router-dom";

const Home = () =>{
    return(
        <React.Fragment>


            <main>

                <img src="/Assets/Image/Hero1.5.jpg" alt="" width={"100%"}/>

                <div className="main-content">
                    <h1>D Event Booking</h1>
                    <h2>Discover and Book Amazing Events</h2>
                    <p>Browse upcoming tech, music, business and entertainment events</p>

                   <button className="main-btn">
                    <Link to={"/events"} className="main-link">View Events</Link>
                   </button>

                </div>

            </main>

            <section className="about">
                <h3>About Us</h3>

                <h4>Why Choose Event Booking?</h4>

                <p>Event Booking is a platform that allows users to discover upcoming events, view event details, and reserve seats quickly and conveniently.</p>


                <div>
                    <h4>Easy Booking</h4>
                    <p>Reserve seats in just a few clicks</p>
                </div>

                <div>
                    <h4>Diverse Events</h4>
                    <p>Browse events from multiple categories</p>
                </div>

                <div>
                    <h4>Seat Availability</h4>
                    <p>View available seats before booking</p>
                </div>

                <div>
                    <h4>Fast Navigation</h4>
                    <p>Simple and user-friendly experience</p>
                </div>

            </section>

            <section className="cta">
                <h3>Ready to find your next event</h3>
                
                <button>
                    <Link to={"/events"}>Browse Events</Link>
                </button>
            </section>



        </React.Fragment>
    )
}
export default Home