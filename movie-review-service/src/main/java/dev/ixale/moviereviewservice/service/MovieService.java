package dev.ixale.moviereviewservice.service;

import dev.ixale.moviereviewservice.model.Movie;
import dev.ixale.moviereviewservice.repository.MovieRepository;
import org.bson.types.ObjectId;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MovieService {
    private final MovieRepository movieRepository;

    public MovieService(MovieRepository movieRepository) {
        this.movieRepository = movieRepository;
    }

    public List<Movie> findAllMovies() {
        return movieRepository.findAll();
    }

    public Optional<Movie> findMovieById(ObjectId id) {
        return movieRepository.findById(id);
    }
    public Optional<Movie> findMovieByImdbId(String imdbId) {return movieRepository.findMovieByImdbId(imdbId);}
}
