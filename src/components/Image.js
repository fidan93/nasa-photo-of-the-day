import React from 'react';

export default function Image (props){
const {imgDate,imgSrc,imgExplanation} = props;
const style = {
    width: '100%'
}

if (!imgSrc) return <h3>Loading...</h3>;
// Display your component as normal after the data has been fetched
    return (
        
        <div className = "main-container">
        <h4>date:{imgDate}</h4>
        <div className = "img-container" style = {style}>
            <img src = {imgSrc} alt = "of the day" style ={style}/>
        </div>
        <p>{imgExplanation}</p>
        </div>
    )
}