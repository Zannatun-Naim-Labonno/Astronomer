//React Router Setup
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import React from "react";
import "./App.css";

//Route Pages

import Read from "./components/Read/Read";
import Front from './components/Front/Front';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Star from './components/Star/Star';
import Planet from './components/Planet/Planet';
import Gk from './components/Gk/Gk';
import SP from './components/SP/SP';
import Gallary from './components/Gallary/Gallary';
import Story from './components/Story/Story';
import Tic from './components/Tic/Tic';
import Pic from './components/Pic/Pic';
import SF1 from './components/SF1/SF1';
import SF2 from './components/SF2/SF2';
import SF3 from './components/SF3/SF3';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="containter">
          <Routes>

         
          <Route exact path="/Read" element={<Read/>}/>
          <Route exact path="/" element={<Front/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/Home" element={<Home/>}/>
          <Route exact path="/Star" element={<Star/>}/>
          <Route exact path="/Planet" element={<Planet/>}/>
          <Route exact path="/Gk" element={<Gk/>}/>
          <Route exact path="/SP" element={<SP/>}/>
          <Route exact path="/Gallary" element={<Gallary/>}/>
          <Route exact path="/Story" element={<Story/>}/>
          <Route exact path="/Tic" element={<Tic/>}/>
          <Route exact path="/Pic" element={<Pic/>}/>
          <Route exact path="/SF1" element={<SF1/>}/>
          <Route exact path="/SF2" element={<SF2/>}/>
          <Route exact path="/SF3" element={<SF3/>}/>
         
          
      
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
