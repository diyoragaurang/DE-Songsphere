import { IconButton } from '@mui/material'
import React from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import DownloadIcon from '@mui/icons-material/Download';
import "./Header.scss"
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const Header = () => {
    const navigate = useNavigate(); // Initialize the navigate function
    
    const handleBack = () => {
        navigate(-1); // Navigate back one page in history
    };
    
    const handleForward = () => {
        navigate(1); // Navigate forward one page in history
    };
    
    return (
        <header className="header">
            <div className="header__icon-wrapper">
                <IconButton 
                    style={{ backgroundColor: "rgba(0,0,0,.7)" }}
                    onClick={handleBack} // Add onClick handler for back button
                >
                    <ArrowBackIosNewIcon style={{ color: "#fff", fontSize: "1.6rem" }} />
                </IconButton>
                <IconButton 
                    style={{ backgroundColor: "rgba(0,0,0,.7)" }}
                    onClick={handleForward} // Add onClick handler for forward button
                >
                    <ArrowForwardIosIcon style={{ color: "#fff", fontSize: "1.6rem" }} />
                </IconButton>
            </div>
            <div style={{ display: "flex", columnGap: "1rem" }}>
                <button className="white-btn">Explore Premium</button>
                <button className="black-btn" style={{ display: "flex", alignItems: "center" }}> <DownloadIcon />Install App</button>
            </div>
        </header>
    )
}

export default Header