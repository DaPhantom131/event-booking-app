import React from "react";
import "../Styles/EventCard.css"
import { Link } from "react-router-dom";

const EventCard = ({id, description, image, title, type, date, seats}) =>{
    return(
        <React.Fragment>

     <div className="event-card">

        <div className="event-card-image-wrapper">
            <img src={image} alt={title} className="event-card-image"/>
        </div>

        <div className="event-card-info">

            <h3>Title : {title}</h3>
            <p>Type : {type}</p>
            <p>Date : {date}</p>
            <p>Available Seats : {seats}</p>

        </div>

        <div className="event-card-btn">
            
                    <Link to={`/eventdetails/${id}`}>
                    <button> View Event </button>
                    </Link>
            
        </div>

        </div>       

        </React.Fragment>
    )
}
export default EventCard