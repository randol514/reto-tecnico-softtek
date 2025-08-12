import React from "react";

//Pages
import Home from "../pages/Home";
import Plans from "../pages/Plans";
import Summary from "../pages/Summary";
import NotFound from "../pages/404";
import Terms from "../pages/terms";

//Routing
import {Routes, Route} from 'react-router-dom'



const RoutesConfig = () =>{
  return(
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/planes" element={<Plans/>}/>
      <Route path="/resumen" element={<Summary/>}/>
      <Route path="/terminos" element={<Terms/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  )
}

export default RoutesConfig