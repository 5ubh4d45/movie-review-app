import './Hero.css';
import React from 'react'
import Carousel from 'react-material-ui-carousel';
import { Paper } from "@mui/material";
import { MovieData } from '../../dataTypes/dataTypes';


function Hero(props: { movies: MovieData[]}) {

  return (
    <div className='movie-carousel-container'>
      <Carousel>
      {
        props.movies.map((movie) =>{

          return (
            <Paper>
              <div className='movie-card-container'>
                <div className='movie-card' style={{"--backdropImg": `url(${movie.backdrops[0]})`} as React.CSSProperties}>
                  <div className='movie-detail'>
                    <div className='movie-poster'>
                      <img src={movie.poster} alt=''/>
                    </div>
                    <div className='movie-title'>
                      <h4>{movie.title}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </Paper>
          )
        })
      }
      </Carousel>
    </div>
  );
}

export default Hero