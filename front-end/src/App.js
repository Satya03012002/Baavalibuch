import React from "react";
import Page2 from "./MyComponents/Page2";
import Page1 from './MyComponents/Page1';
import {  Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";




function App() {


  return (
    <>
    
      <Routes>
        <Route path="/" exact={true} element={<Page1 />}></Route>
        <Route path="/data" exact={true} element={<Page2 />}></Route>
      </Routes>
     {/* <Page1/> */}
     {/* <Page2/> */}
     
    </>
  );
}

export default App;
