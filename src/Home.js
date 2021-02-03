
import React from 'react'
import Main from "./component/Main";
import  { useState } from "react";

import { moviesData } from "./component/MoviesData";
 const Home= () => {


  const [movies, setMovies] = useState(moviesData);
  const [myInput, setMyInput] = useState("");
  const [myRate, setMyRate] = useState(0);
 
  const AddNewMovie=(x)=>{setMovies([...movies, x])}
    return (
        <div>
              <Main
        movies={movies.filter(
          (el) =>
            el.name.toLowerCase().includes(myInput.toLowerCase().trim()) &&
            el.rating >= myRate
        )}
        AddNewMovie={AddNewMovie}
      />
        </div>
    )
}
export default Home  ;