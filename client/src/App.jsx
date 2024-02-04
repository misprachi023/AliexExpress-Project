import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Carousel from "./components/slider";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import Footer from "./components/footer";
import MidFooter from "./components/midfooter";
import LastFooter from "./components/lastfooter";

// import Personallization from "./drawer/personallization"; 
import PersonlizationStyle from "./drawer/personallization";
import Gift from "./drawer/gift";
import Corporate from "./drawer/corporate";
import Createuser from "./drawer/createuser";
import Demo from "./components/demo";
// import Login from "./drawer/login";
import { HiOutlineMail } from 'react-icons/hi';

function App() {
  return (
    <> 
    {/* <Demo/> */}   
      <Navbar />
      <Personallization/>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personallization" element={<PersonlizationStyle />} /> 
        <Route path="/gift" element={<Gift />} /> 
        <Route path="/corporate" element={<Corporate />} /> 3
      </Routes> 
      <Footer />
      <MidFooter />
      <LastFooter />
    </> 
  );
}

export default App;
