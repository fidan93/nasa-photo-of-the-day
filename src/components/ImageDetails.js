import React from 'react';
export default function ImageDetails (props){
const {imgSrc,imgExplanation,imgDate,imgTitle} = props;
const style = {
    width: '90%',
    margin: '0 auto'
}

if (!imgSrc) return <h3>Loading...</h3>;
// Display your component as normal after the data has been fetched
    return (
        
        <div className = "main-container" style={style}>
        <div className = "img-container" style = {style}>
           {/* <Image imgSRC = {imgSrc} />  */}
           <img src = {imgSrc} alt = "of the day" width = '100%'/>
        </div>
        <h3>{imgTitle}</h3>
        <p>{imgDate}</p>
        <p>{imgExplanation}</p>
        </div>
    )
}