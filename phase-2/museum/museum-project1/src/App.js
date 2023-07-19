import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import DisplayArt from './components/DisplayArt';
import { useEffect, useState } from 'react';
 




function App() {

const [arts,setArts]=useState([])

const [featuredArt,setFeaturedArt]=useState({})

function showArt(art){
  setFeaturedArt(art)
}

useEffect(()=>{
  fetch('')
  .then(response=>response.json())
  .then(data=>setArts(data))
},[])

  return (

    <div className="App">
      <h1>ART MUSEUM</h1>
      <Navbar arts={arts} showArt={showArt} />
      <DisplayArt featuredArt={featuredArt} />

      
    </div>
  );
}

export default App;
