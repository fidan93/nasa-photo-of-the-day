import React, {useState,useEffect} from "react";
import "./App.css";
import Header from './components/Header';
import Image from './components/Image';
import axios from 'axios';

function App() {
  const [nasaData, setNasaData] = useState([]);

  useEffect(() => {
    axios 
    // .get(`
    // https://api.nasa.gov/planetary/apod?api_key=sHeucF01mNW1Nhok2YsfaDCv7Xp5aZckjXAxrSra`)
    .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
    .then((res) => {
      console.log(res.data)
       setNasaData(res.data);
    })
    .catch((err)=>{
      debugger;
      console.log(err);
    })
  },[])
  

  return (
    console.log(nasaData),
    <div className="App">
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p> */}
      <Header />
      
       <Image  imgDate = {nasaData.date} imgSrc = {nasaData.hdurl}  imgExplanation = {nasaData.explanation} />

    </div>
  );
}

export default App;
