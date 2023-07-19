import React from 'react'
import Art from './Art'



export default function Navbar ({arts,showArt}){


    return(
        arts.map(art=> <Art key={art.title} art={art} showDuck={showArt}/>)

    )
}
