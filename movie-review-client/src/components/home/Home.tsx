import React from 'react'
import { MovieData } from '../../dataTypes/dataTypes';
import Hero from "../hero/Hero";
import Header from "../header/Header";



function Home(props: {moviesData: MovieData[]}) {
  return (
      <div>
        <Hero movies={props.moviesData} />
      </div>

  );
}

export default Home