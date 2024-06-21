import { Movie } from "../models/Movie";
import { OmdbResponse } from "../models/OmdbResponse";
import { get } from "./serviceBase";

const BASE_URL = `http://omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_KEY}&`;

export const getMovies = async (searchText: string): Promise<Movie[]> => {

    const response = await get<OmdbResponse>(`${BASE_URL}s=${searchText}`)

    return response.Search
}