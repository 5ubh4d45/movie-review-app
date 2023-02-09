import axiosConfig from "../api/axiosConfig";
import { MovieData } from "../dataTypes/dataTypes";


// type GetMoviesResponse = {
//     data: MovieData[];
// };

export const getMoviesData = async () => {

    try {

        // const response = await api.get("/movies");
        const response = await axiosConfig.get("/movies");

        console.log(response.data);
        const data : MovieData[] = response.data;
        console.log(JSON.stringify(data, null, 4));
        return data;

    } catch (e) {
        console.log(e);
    }
}