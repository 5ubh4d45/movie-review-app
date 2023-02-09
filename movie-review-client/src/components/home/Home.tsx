import React from 'react'
import { MovieData } from '../../dataTypes/dataTypes';
import Hero from "../hero/Hero";



function Home(props: {moviesData: MovieData[]}) {
  return (
    <Hero movies={props.moviesData} />
  );
}

export default Home