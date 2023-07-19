import React from "react";
import Navbar from "./Navbar";
export default function DisplayArt ({featuredArt}){


    return(
        <div className="art-display">
            <h2>{featuredArt.title}</h2>
            <img src={featuredArt.image} alt={featuredArt.title} />
        </div>
    )
}
