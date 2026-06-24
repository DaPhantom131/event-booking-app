import React from "react";

import EventCard from "../EventCard";
import {events} from "../../Data/event.js"
import "../../Styles/EventCard.css";

const Events = () =>{
    return(
        <div className="event-page">

            <h1>Upcoming Events</h1>

            <div className="all-event-cards">

                {events.map((event) => (
                    <EventCard
                        key={event.id}
                        id={event.id}
                        image={event.image}
                        title={event.title}
                        type={event.type}
                        date={event.date}
                        seats={event.seats}
                        description={event.description} />
                ))}

            </div>
            
        </div>
    )
}
export default Events