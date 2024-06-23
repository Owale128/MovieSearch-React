import { Movie } from "../models/Movie";
import '../sass/movies.scss'

interface IMovieItemProps {
movie: Movie
}

export const MovieItem = ({movie}: IMovieItemProps) => {

    return(
        <div className="movieItem" title="click for more info">
        <h3>{movie.Title}</h3>
        <img src={movie.Poster} alt={movie.Title} />
        <p>Year: {movie.Year}</p>
        </ div>
    )
}