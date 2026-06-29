import React from "react";
import "../../Styles/Booking.css";
import formImage from "../../Assets/Image/AI.jpg"

const Booking = () =>{
    return(

            <div className="form-container">

                <form action="">

                    <h1>Book Your Ticket</h1>

                    <div className="form-event">

                    <div className="form-event-image-wrapper">
                        <img src={formImage} alt="event-title" className="form-event-image"/>
                    </div>

                    <p>Event Title : AI Conference </p>

                    <p>Available Seats: 50 </p>

                    </div>

                <div className="form-details">
                    
                    <div className="form-details-input">
                       <label htmlFor="">Full Name</label>
                       <input type="text" placeholder="Enter your Full Name"  required/>
                    </div>
                
                    <div className="form-details-input">
                       <label htmlFor="">Email</label>
                       <input type="email" placeholder="Enter your Email" required/>
                    </div>
                     
                    <div className="form-details-input">
                       <label htmlFor="">Number of Tickets</label>
                       <input type="number" min={1} placeholder="1" max={50}/>
                    </div>

                </div>

                   <div className="form-button">
                        <button type="submit"> Book Ticket</button>
                   </div>

                </form>

            </div>
    )
}
export default Booking