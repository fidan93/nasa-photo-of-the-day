import React, {useState,useEffect} from "react";
import "./App.css";
import Header from './components/Header';
import ImageDetails from './components/ImageDetails';
import axios from 'axios';

function App() {
  const [nasaData, setNasaData] = useState([]);

let date = [];
  for (let i=1; i<=9; i++){
    date[i] = `2020-0${i}-${Math.floor(Math.random()*3)}${Math.floor(Math.random()*9)}`;
  }
  const [allDates] = useState(date);
  const [currentDate, setCurrentDate]=useState('2020-11-04')


  useEffect(() => {
    axios 
    .get(`
    https://api.nasa.gov/planetary/apod?api_key=sHeucF01mNW1Nhok2YsfaDCv7Xp5aZckjXAxrSra&date=${currentDate}`)
    .then((res) => {
  
       setNasaData(res.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  },[currentDate])

  function currentDateSetter(e){
let str = e.target.textContent;
const str2 = str.split(':');
    setCurrentDate(str2[1]);
  }

  return (
    
    <div className="App">
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p> */}
      <Header />
            {
            allDates.map(eachDate => {
              return  <h4 key = {eachDate} onClick = {currentDateSetter}> date:{eachDate} </h4>
            })
            }
       <ImageDetails imgTitle = {nasaData.title} imgDate = {nasaData.date} imgSrc = {nasaData.hdurl}  imgExplanation = {nasaData.explanation} arrayDate = {date} />

    </div>
  );
}

export default App;
