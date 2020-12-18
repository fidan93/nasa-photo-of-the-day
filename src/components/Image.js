import React from 'react';
import styled from 'styled-components';
import theme from '../theme'
export default function Image(props){
const {imageDetails} = props;

    return(
        <ImgContainer>
        <div>
           <img src = {imageDetails.hdurl} alt = "of the day" width = '100%'/>
        </div>
        <div>
        <h3>{imageDetails.title}</h3>
        <p>{imageDetails.date}</p>
        <p>{imageDetails.explanation}</p>
        </div>
        </ImgContainer>
    )
}

const ImgContainer = styled.div`

display: flex;
flex-wrap:wrap;
justify-content:center;
color: rgb(56,56,56);
  
 p{
  margin-bottom: 2%;
 }

 h3{
    padding: 2% 0;
    width: 100%auto;
}
div:hover {

color: ${theme.nasaBlue};
transition: all .4s ease-in;

}
 div img{
     border-radius:5px;
 }
`