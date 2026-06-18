import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Components/Routes/Home";
import Navbar from "./Components/Navbar";
import Events from "./Components/Routes/Events";
import Booking from "./Components/Routes/Booking";


import "./Styles/Main.css";

function App() {

  return(

<BrowserRouter>
      <React.Fragment>

        <Navbar/>

        <Routes>

          <Route path="/" element={<Home/>}/>

          <Route path="/events" element={<Events/>}/>

          <Route path="/bookings" element={<Booking/>}/>

        </Routes>



      </React.Fragment>
</BrowserRouter>
    
  )
}

export default App