import React from "react";
import EventCard from "../EventCard";
import img1 from "../../Assets/Image/Tech.jpg"

const Events = () =>{
    return(
        <React.Fragment>
            <h2>This is the Events Page</h2>


            <EventCard 
            image={img1}
            title="Tech Conference"
            type="Tech"
            seats={50}

            />

            <EventCard
                image={img1}
                title="Camp Talk"
                type="Nature"
                seats={100}

            />
        </React.Fragment>
    )
}
export default Events