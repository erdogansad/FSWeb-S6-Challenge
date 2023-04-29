import React, { useEffect, useState } from 'react';
import Karakterler from "./components/Karakterler";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [charData, setCharData] = useState([]);
  const [filmsData, setFilms] = useState([]);

  useEffect(() => {
    let data = require("./mocks/handlers");
    setCharData(data.data);
    setFilms(data.films[0].results);
  },[])

  return (
    <div className="App">
      <h1 className="Header">Karakterler</h1>
      <Karakterler characters={charData} films={filmsData}/>
    </div>
  );
}

export default App;
