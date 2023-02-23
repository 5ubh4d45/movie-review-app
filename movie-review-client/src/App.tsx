import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import Layout from './components/Layout';
import {Route, Routes} from "react-router-dom";
import Home from './components/home/Home';
import { MovieData } from './dataTypes/dataTypes';
import { getMoviesData } from './services/MovieService';
import Trailer from "./components/trailer/Trailer";
import Header from "./components/header/Header";
import Reviews from "./reviews/Reviews";
import PageNotFound from "./components/pageNotFound/PageNotFound";

function App() {
  const [movies, setMovies] = useState<MovieData[]>([]);

  useEffect(()=> {
    getMoviesData().then((data)=>setMovies(data!));
  }, []);

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Home moviesData={movies}/>}></Route>
          <Route path="/trailer/:ytTrailerId" element={<Trailer/>}></Route>
          <Route path="/reviews/:movieId" element={<Reviews/>}></Route>
          <Route path="*" element={<PageNotFound/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
