import React, { useContext } from "react";
import { Moviesprovider } from "./Moviescontext";
function A(){
    const obj= useContext(Moviesprovider)
    return(
        <div>
            <h1>A component</h1>

            <h1>Director name is {obj.director}</h1>
        </div>
    )
}

export default A