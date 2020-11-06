import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Image from './Image';
import styled from 'styled-components';
import theme from '../theme/index'

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


if (!nasaData.hdurl) return <h3>Loading...</h3>;
// Display your component as normal after the data has been fetched
    return (
        
        <Main>
            <Dropdown>
                <p>Pick the date:</p>
                <DropdownContent>
            {
            allDates.map(eachDate => {
              return  <h4 key = {eachDate} onClick = {currentDateSetter}> date:{eachDate} </h4>
            })
            }
            </DropdownContent>
            </Dropdown>
        <Image imageDetails = {nasaData} />
        </Main>
    )
}
const Main = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
width:90%;
margin: 0 auto;
`
const DropdownContent = styled.div`
display: none;
width: 100%;
`
const Dropdown = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
margin: 5% auto;
background-color: ${theme.nasaBlue};
color: ${theme.nasaWhite};

&:hover ${DropdownContent}{
    display: flex;
    flex-direction: column;
    transition: all .4s ease-in-out;
}
@media (max-width:800px){
    width:100%auto;
}
p{
    padding:5%5%;
}
h4 {
    padding: 5% 0;
    width: 100%auto;
}
h4:hover {
background-color:${theme.nasaRed} ;
color: ${theme.nasaBlue};
transition: all .4s ease-in-out;
}
`
