import { useEffect, useState } from "react"
import { Movie } from "../models/Movie"
import { getMovies } from "../services/movieservice"

interface movieAppState {
    movies: Movie[]
    fetchDone: boolean
}

export const MoviesApp = () => {
    const [state, setState] = useState<movieAppState>({
        movies: [],
        fetchDone: false
    })

    const getData = async (searchText: string) => {
        try{
            const movies = await getMovies(searchText)
            setState({ fetchDone: true, movies })
        }catch(error) {
            console.error('Could not fetch', error)
        }
    }

    useEffect(() =>{
        if(state.fetchDone) {
            return
        }
        getData('')
    })

    return(
        <>
        <h1>This is Movies Page</h1>
        </>
    )
}