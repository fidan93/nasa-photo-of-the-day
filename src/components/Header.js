import React from 'react';
import logo from './logo192.png';
export default function Header(){
    return (
        <header className = "App-header">
            <h1>NASA Photo of the day</h1>
            <div className = "App-logo">
                <img src={logo} alt='logo'/>
            </div>
        </header>
    )
    
}
