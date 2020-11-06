import React from 'react';
import styled from 'styled-components';

export default function Image(props){
const {imageDetails} = props;

    return(
        <ImgContainer>
        <div>
           <img src = {imageDetails.hdurl} alt = "of the day" width = '100%'/>
        </div>
        <h3>{imageDetails.title}</h3>
        <p>{imageDetails.date}</p>
        <p>{imageDetails.explanation}</p>
        </ImgContainer>
    )
}

const ImgContainer = styled.div`
display: flex;
flex-direction: column;
justify-content:center;
 h3{
     margin: 2% 0;
 }
 p{
     margin:1% 0 2% 0;
 }
`