import './Hero.css';
import React from 'react'
import Carousel from 'react-material-ui-carousel';
import { Paper } from "@mui/material";
import { MovieData } from '../../dataTypes/dataTypes';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCirclePlay} from "@fortawesome/free-solid-svg-icons";


function Hero(props: { movies: MovieData[]}) {

  return (
    <div className='movie-carousel-container'>
      <Carousel>
      {
        props.movies.map((movie) =>{
            // console.log(movie.trailerLink.substring(movie.trailerLink.length - 11));
          return (
            <Paper key={movie.imdbId}>
              <div className='movie-card-container'>
                <div className='movie-card' style={{"--backdropImg": `url(${movie.backdrops[0]})`} as React.CSSProperties}>
                  <div className='movie-detail'>
                    <div className='movie-poster'>
                      <img src={movie.poster} alt=''/>
                    </div>
                    <div className='movie-title'>
                      {/*<h2>{movie.title}</h2>*/}
                        {movie.title}
                    </div>
                    <div className={"movie-buttons-container"}>
                        <Link to={`/trailer/${movie.trailerLink.substring(movie.trailerLink.length - 11)}`}>
                            <div className={"play-button-icon-container"}>
                                <FontAwesomeIcon icon={faCirclePlay} className={"play-button-icon"}/>
                            </div>
                        </Link>
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