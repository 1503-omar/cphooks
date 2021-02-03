import React, { useState } from "react";

import { moviesData } from "./component/MoviesData";
import Main from "./component/Main";
import { Route, Switch } from "react-router-dom";
import About from "./component/About";
import Header from "./component/Header/Header";
import Home from "./component/Home"
import "./App.css";
import Re from "./Home"

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [myInput, setMyInput] = useState("");
  const [myRate, setMyRate] = useState(0);
 
  const AddNewMovie=(x)=>{setMovies([...movies, x])}

  return (
    <div className="App">
      <Header setMyInput={setMyInput} myRate={myRate} setMyRate={setMyRate} />
      <switch>
              <Route exact path="/" component={Re} />
              <Route path="/about" component={About} />
           

      </switch>

    
  
    </div>
  );
}

export default App;