import React, { useEffect, useState } from 'react';
import Karakterler from "./components/Karakterler";
import axios from "axios";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  /* const [charData, setCharData] = useState([]);
  const [filmsData, setFilms] = useState([]); */
  const [characters, setCharacters] = useState([]),
        [films, setFilms] = useState([]);

  useEffect(() => {
    axios.get("https://swapi.dev/api/people/")
    .then((response) => {
      console.log(response.data);
      setCharacters(response.data);
    })
    .catch((err) => {
      console.log(err);
    })

    axios.get("https://swapi.dev/api/films/")
    .then((response) => {
      setFilms(response.data[0].results);
    })
    .catch((err) => {
      console.log(err);
    })
  },[])

  return (
    <div className="App">
      <h1 className="Header">Karakterler</h1>
      <Karakterler characters={characters} films={films}/>
    </div>
  );
}

export default App;
