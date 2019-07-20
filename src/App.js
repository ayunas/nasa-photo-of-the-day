import React, { useState, useEffect } from "react";
import axios from 'axios';
import NasaCard from './NasaCard';

import "./App.css";

function App() {

  const [data, setData] = useState({})

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(res => {
        console.log(res.data);
        setData(res.data);
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <NasaCard data={data} />
  );
}

export default App;
