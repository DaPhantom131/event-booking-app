import React from "react";

import EventCard from "../EventCard";
import {events} from "../../Data/event.js"
import "../../Styles/EventCard.css";

import { useState } from "react";

const Events = () =>{

    const [searchTerm, setSearchTerm] = useState(events);

    function onChange(e) {
        const value = e.target.value.toLowerCase();

        const Filtered = events.filter(event =>
            event.title.toLowerCase().includes(value)
        )

        setSearchTerm(Filtered)
    }


    return(
        <div className="event-page">

            <h1>Upcoming Events</h1>

            <div className="search-bar">
                <input
                 type="text" 
                 placeholder="Search"
                onChange={onChange} />
            </div>

            <div className="all-event-cards">

                {searchTerm.map((event) => (
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