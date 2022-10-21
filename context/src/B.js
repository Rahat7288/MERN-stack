import React,{ useContext } from "react";
import { Moviesprovider } from "./Moviescontext";


function B(){
   
        const obj= useContext(Moviesprovider)
    
    return(
        <div>
            <h1>B component</h1>
            <h2>the movie name is {obj.movie}</h2>
        </div>
    )
}

export default B