import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Components/Routes/Home";
import Navbar from "./Components/Navbar";

function App() {

  return(

<BrowserRouter>
      <React.Fragment>

        <Navbar/>

        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>



      </React.Fragment>
</BrowserRouter>
    
  )
}

export default App