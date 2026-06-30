import React, { useEffect, useState } from "react";
import "../../Styles/Booking.css";
import { events } from "../../Data/event";
import { useParams } from "react-router-dom";

const Booking = () =>{
    const {id} = useParams();
    const event = events.find(event => event.id.toString() === id);

    const [fullName, setFullName] = useState("");
    const [fullEmail, setFullEmail] = useState("");
    const [fullNumber, setFullNumber] = useState("");

    
    const [formInputs, setFormInputs] = useState([]);

    const [isSubmit, setIsSubmit] = useState(false)

    function handleSubmit(e) {
        e.preventDefault();

        setFormInputs([...formInputs,
        {
            name: fullName,
            email: fullEmail,
            ticket: fullNumber
        }
        ]);

        setFullName("");
        setFullEmail("");
        setFullNumber("");

        setIsSubmit(true)
    }


useEffect(() => {
  if (isSubmit){
    const timer = setTimeout(() => {
        alert("Booking Successful");
        setIsSubmit(false)
    },500 )

      return () => clearTimeout(timer);
  }

    },[isSubmit]);

    console.log(formInputs);
    
 


    return(

            <div className="form-container">

                <form action="" onSubmit={handleSubmit}>

                    <h1>Book Your Ticket</h1>

                    <div className="form-event">

                    <div className="form-event-image-wrapper">
                        <img src={event.image} alt={event.title} className="form-event-image"/>
                    </div>

                    <p>Event Title : {event.title} </p>

                    <p>Available Seats: {event.seats}</p>

                    </div>

                <div className="form-details">
                    
                    <div className="form-details-input">
                       <label htmlFor="">Full Name</label>
                       <input type="text" placeholder="Enter your Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} required/>
                    </div>
                
                    <div className="form-details-input">
                       <label htmlFor="">Email</label>
                        <input type="email" placeholder="Enter your Email" value={fullEmail} onChange={(e) => setFullEmail(e.target.value)} required/>
                    </div>
                     
                    <div className="form-details-input">
                       <label htmlFor="">Number of Tickets</label>
                        <input type="number" min={1} placeholder="1" max={50} value={fullNumber} onChange={(e) => setFullNumber(Number(e.target.value))} />
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