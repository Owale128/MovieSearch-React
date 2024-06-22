import { Movie } from "../models/Movie";
import '../sass/movies.scss'

interface IMovieItemProps {
movie: Movie
}

export const MovieItem = ({movie}: IMovieItemProps) => {

    return(
        <div className="movieContainer">
        <h3>{movie.Title}</h3>
        <img src={movie.Poster} alt={movie.Title} />
        </div>
    )
}