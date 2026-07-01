import React, { useEffect } from "react";

import EventCard from "../EventCard";
import {events} from "../../Data/event.js"
import "../../Styles/EventCard.css";
import "../../Styles/Main.css";

import { useState } from "react";

const Events = () =>{

    const [eventItem, setEventItem] = useState([]);
    const [activeEvent, setActiveEvent] = useState("All");
    const [searchValue, setSearchValue] = useState("");

    

  

    function filterEvents(type, search) {
        let filtered = events;

        if (type !== "All") {
            filtered = filtered.filter((event) => event.type === type);
        }

        if (search.trim() !== "") {
            filtered = filtered.filter((event) =>
                event.title.toLowerCase().includes(search.toLowerCase())
            );
        }

        setEventItem(filtered);
    }

    function handleSearch(e) {
        const value = e.target.value;
        setSearchValue(value);
        filterEvents(activeEvent, value);
    }

    function handleCategory(type) {
        setActiveEvent(type);
        filterEvents(type, searchValue);
    }

    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        setTimeout(()=>{
setEventItem(events)
setLoading(false);
        },3000)
    },[])

    return(
        <div className="event-page">

            <h1>Upcoming Events</h1>

            <div className="search-bar">
                <input
                 type="text" 
                 placeholder="Search here.."
                onChange={handleSearch} />
            </div>


            <div className="event-filters">
                {["All", "Tech", "Music", "Business", "Entertainment", "Lifestyle", "Art", "Sport"].map(
                    (type) => (
                        <button
                            key={type}
                            className={`filter-btn ${activeEvent === type ? "filter-btn-active" : ""
                                }`}
                            onClick={() => handleCategory(type)}
                        >
                            {type}
                        </button>
                    )
                )}
            </div>

         {loading ? (<h3>Loading Events..</h3> ) :
         
                <div className="all-event-cards">

                    {eventItem.map((event) => (
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
         }
            
        </div>
    )
}
export default Events