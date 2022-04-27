import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Characters from './components/Characters';
import Pagination from './components/Pagination';


function App() {

  const [characters, setCharacters] = useState([]);
  const [info, setinfo] = useState([])
  const initialurl = "https://rickandmortyapi.com/api/character"

  const fetchCharacter = (url) => {

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setCharacters(data.results);
        setinfo(data.info);
      })
      .catch(error => console.log(error));
  };

  const onPrevious = () => {
    fetchCharacter(info.prev);
  }
  const onNext = () => {
    fetchCharacter(info.next);
  }

  useEffect(() => {
    fetchCharacter(initialurl);
  }, []);

  return (
    <div>
      <Navbar brand='Rick and Morty App' />
      <div className='container mt-5' >
        <Pagination
          prev={info.prev}
          next={info.next}
          onPrevious={onPrevious}
          onNext={onNext}
        />
        <Characters characters={characters} />
        <Pagination
          prev={info.prev}
          next={info.next}
          onPrevious={onPrevious}
          onNext={onNext}
        />
      </div>
    </div>
  );
}

export default App;
