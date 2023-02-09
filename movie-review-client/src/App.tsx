import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import Layout from './components/Layout';
import {Route, Routes} from "react-router-dom";
import Home from './components/home/Home';
import { MovieData } from './dataTypes/dataTypes';
import { getMoviesData } from './services/MovieService';

function App() {
  const [movies, setMovies] = useState<MovieData[]>([]);

  useEffect(()=> {
    getMoviesData().then((data)=>setMovies(data!));
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Home moviesData={movies}/>}></Route>

        </Route>
      </Routes>
    </div>
  );
}

export default App;
