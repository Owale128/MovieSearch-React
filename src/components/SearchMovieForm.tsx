import { FormEvent, useState } from "react";
import '../sass/movies.scss'

interface ISearchMovieFormProps {
    getData: (searchText: string) => void;
}

export const SearchMovieForm = ({getData}: ISearchMovieFormProps) => {
    const[searchText, setSearchText] = useState('')

    const handleSearch = (e: FormEvent) => {
        e.preventDefault();
        if(searchText.trim() !== ''){
            getData(searchText)
            setSearchText('')
        }
    }

    return (
        <div className="searchMovieForm">
        <form onSubmit={handleSearch}>
            <label htmlFor="search">Search for a movie</label>
            <input type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            name="search"
            />
            <button>Sök</button>
        </form>
        </div>
    )
}