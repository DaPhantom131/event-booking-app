import React from "react";
import { useParams, Link } from "react-router-dom";
import { events } from "../../Data/event";
import "../../Styles/Main.css";

const EventDetails = () =>{

    const {id} = useParams();
    const event = events.find(event => event.id.toString() === id)
    return(
        <div className="event-details-container">
         <img src={event.image} alt={event.title} className="event-details-image" />

         <div className="event-details-info">
            <h1>{event.title}</h1>

            <p>Type - {event.type}</p>
            <p>Date - {event.date}</p>
            <p>Available Seats - {event.seats}</p>

            <div className="event-description">{event.description}</div>

            <div className="event-details-buttons">
               <Link to={`/bookings/${id}`}>
                        <button className="event-btn book-btn">Book Now</button>
               </Link>

                <Link to={"/events"}>
                        <button className="event-btn book-btn">Back to Events</button>
                </Link>
            </div>

         </div>

        </div>
    )
}
export default EventDetails