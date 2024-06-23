import { useState } from "react";
import { Movie } from "../models/Movie";
import { MovieItem } from "./MovieItem";
import '../sass/movies.scss'

interface IMoviesProps  {
    movies: Movie[]
}

export const Movies = ({movies = []}: IMoviesProps) => {
        const[asc, setAsc] = useState(false)
        const[showNewerMovies, setShowNewerMovies] = useState(false)

        const sort = () => {
            setAsc(!asc)
        }

        let modifiedMovies = movies.sort((a, b) => {
            if(a.Title > b.Title) return 1;
            if(a.Title < b.Title) return -1;
                 return 0;
            });

            if(asc){
                modifiedMovies = modifiedMovies.reverse()
            }

            if(showNewerMovies) {
                modifiedMovies = modifiedMovies.filter((movie) => +movie.Year > 2000);
            }

    return(
        <div>
            <div className="sortButtons">
            <label htmlFor="newerMovies">Show newer movies</label>
            <input type="checkbox"
            checked={showNewerMovies}
            onChange={() =>setShowNewerMovies(!showNewerMovies)}
            name="newerMovies"
            />
            <button onClick={sort} className="sortMoviesBtn">Sort movies</button>
            </div>
              <div className="movieContainer">
                {modifiedMovies.map((movie) => (
                    <MovieItem 
                    movie={movie}
                    key={movie.imdbID}
                    />
                ))}
                </div>
                </div>
    )
}