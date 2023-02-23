import axiosConfig from "../api/axiosConfig";
import {MovieData, ReviewData} from "../dataTypes/dataTypes";


// type GetMoviesResponse = {
//     data: MovieData[];
// };

export async function getMoviesData(): Promise<MovieData[] | undefined> {

    try {

        // const response = await api.get("/movies");
        const response = await axiosConfig.get("/movies");

        // console.log(response.data);
        const data : MovieData[] = response.data;
        // console.log(JSON.stringify(data, null, 4));
        return data;

    } catch (e) {
        console.log(e);
    }
}

export async function getMovieData (movieId: string | undefined) : Promise<MovieData | undefined> {

    try {

        // const response = await api.get("/movies");
        const response = await axiosConfig.get(`/movies/${movieId}`);

        // console.log(response.data);
        const data : MovieData = response.data;
        // console.log(JSON.stringify(data, null, 4));
        return data;

    } catch (e) {
        console.log(e);
    }
}

export async function postReviewData(movieId: string, reviewBody: string) : Promise<ReviewData | undefined> {

    try {
        const response = await axiosConfig.post(`/reviews`, {imdbId: movieId, reviewBody: reviewBody});

        const data: ReviewData = response.data;
        console.log(data);
        return data;
    }
    catch (e) {
        console.error(e);
    }
}