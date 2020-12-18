import React from 'react';
import theme from "../theme/index"
import styled from 'styled-components';

export default function Header(){
    return (
        <StyledHeader> 
        <h1>NASA</h1>
        <h2>Photo of the day <span role="img" aria-label='go!'>🚀</span></h2>
           
        </StyledHeader>
    )
    
}

const StyledHeader = styled.header`
display:flex;
flex-direction:column;
justify-content:center;
height: 15vh;
color: ${theme.nasaWhite};
background-color: rgba(34, 49, 63, 1);
opacity: 60%;
h2{
    color: ${theme.nasaRed}
}
&:hover{
 opacity: 80%
}
`
