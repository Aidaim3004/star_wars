import React from 'react';
import HomePage from "./Components/HomePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Species from "./Components/Species";
import './App.css'

import Films from "./Components/Films";
import Planets from "./Components/Planets";
import Starships from "./Components/Starships";
import Vehicles from "./Components/Vehicles";
import Characters from "./Components/Characters";
import Header from "./Components/Header";
import Filminfo from "./Components/Filminfo";
import Speciesinfo from "./Components/Speсiesinfo";
import Vehiclesinfo from "./Components/Vehiclesinfo";
import Planetsinfo from "./Components/Planetsinfo";
import CharactersInfo from "./Components/CharactersInfo";


const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
       <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="/characters" element={<Characters />} />
         <Route path="/characters/:id" element={<CharactersInfo />} />
         <Route path="/species" element={<Species />} />
         <Route path="/species/:id" element={<Speciesinfo />} />
         <Route path="/films" element={<Films />} />
         <Route path="/films/:id" element={<Filminfo />} />
         <Route path="/planets" element={<Planets />} />
         <Route path="/planets/:id" element={<Planetsinfo />} />
         <Route path="/Starships" element={<Starships />} />
         <Route path="/vehicles" element={<Vehicles />} />
         <Route path="/vehicles/:id" element={<Vehiclesinfo />} />
       </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;