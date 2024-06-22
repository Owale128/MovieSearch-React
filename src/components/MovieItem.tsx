import { Movie } from "../models/Movie";

interface IMovieItemProps {
movie: Movie
}

export const MovieItem = ({movie}: IMovieItemProps) => {

    return(
        <>
        <h3>{movie.Title}</h3>
        <img src={movie.Poster} alt={movie.Title} />
        </>
    )
}