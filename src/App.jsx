import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Components/Routes/Home";
import Navbar from "./Components/Navbar";
import Events from "./Components/Routes/Events";
import Booking from "./Components/Routes/Booking";
import Footer from "./Components/Footer";
import EventDetails from "./Components/Routes/EventDetails";


import "./Styles/Main.css";



function App() {

  return(

<BrowserRouter>
      <React.Fragment>

        <Navbar/>

        <Routes>

          <Route path="/" element={<Home/>}/>

          <Route path="/events" element={<Events/>}/>

          <Route path="/eventdetails/:id" element ={<EventDetails/>} />

          <Route path="/bookings/:id" element={<Booking/>}/>

        </Routes>

<Footer/>

      </React.Fragment>
</BrowserRouter>
    
  )
}

export default App