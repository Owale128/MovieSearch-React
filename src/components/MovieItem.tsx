import { Movie } from "../models/Movie";
import '../sass/movies.scss'
import pictureNotFound from '../assets/PictureNotFound.jpg'

interface IMovieItemProps {
movie: Movie
}

export const MovieItem = ({movie}: IMovieItemProps) => {

    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
        e.currentTarget.src = `${pictureNotFound}`
    };

    return(
        <div className="movieItem">
        <h3>{movie.Title}</h3>
        <img src={movie.Poster} alt={movie.Title} onError={handleImageError}/>
        <p>Year: {movie.Year}</p>
        </ div>
    )
}