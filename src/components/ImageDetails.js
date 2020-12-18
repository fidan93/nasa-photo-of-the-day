import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Image from './Image';
import styled from 'styled-components';


export default function ImageDetails (props){

const [nasaData, setNasaData] = useState([]);

let date = [];
  for (let i=1; i<=9; i++){
    date[i] = `2020-0${i}-${Math.floor(Math.random()*3)}${Math.floor(Math.random()*9)+1}`;
  }
  const [allDates] = useState(date);
  const [currentDate, setCurrentDate]=useState(date[1])


  useEffect(() => {
    axios 
    .get(`
    https://api.nasa.gov/planetary/apod?api_key=sHeucF01mNW1Nhok2YsfaDCv7Xp5aZckjXAxrSra&date=${currentDate}`)
    .then((res) => {
       console.log(res)
       setNasaData(res.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  },[currentDate])

  function currentDateSetter(e){
   
   setCurrentDate(e.target.value);
  }


if (!nasaData.hdurl) return <h3>Loading...</h3>;
// Display your component as normal after the data has been fetched
    return (
        
        <Main>
            <div className="custom-select">
                <select onChange={currentDateSetter}>
                <option>Pick the date:</option>
            {
            allDates.map(eachDate => {
              return  <option key = {eachDate} value = {eachDate} > date: {eachDate} </option>
            })
            }
            </select>
            </div>
        <Image imageDetails = {nasaData} />
        </Main>
    )
}
const Main = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
width:90%;
margin: 5% auto;

select{
  width:100%;
  height:100%;
  background-color: transparent;
  outline: none;
  font-size: 1.1rem;
  position:relative;
  border: none;
  color: rgb(56,56,56);
}

.custom-select{
width: 40%;
border: 1px solid #777;
border-radius: 0.25rem;
padding: 0.25em 0.5em;
background-color:#D0D0D0;
opacity: 80%;
align-items:center;
position:relative;
margin-bottom:5%;
}




`





