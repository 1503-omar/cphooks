import React from 'react'
import AddMovie from './AddMovie/AddMovie';
import MoviesList from "./MoviesList";

export const Main = ({movies, AddNewMovie}) => {
    return (
        <div>
            <MoviesList movies={movies}/>
            <AddMovie AddNewMovie={AddNewMovie} />
        </div>
    )
}

export default Main