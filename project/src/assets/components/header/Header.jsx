import { IconButton } from '@mui/material'
import React from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import DownloadIcon from '@mui/icons-material/Download';
import "./Header.scss"

const Header = () => {
    return (
        <header className="header">
            <div className="header__icon-wrapper">
                <IconButton style={{ backgroundColor: "rgba(0,0,0,.7)" }}>
                    <ArrowBackIosNewIcon style={{ color: "#fff", fontSize: "1.6rem" }} />
                </IconButton>
                <IconButton style={{ backgroundColor: "rgba(0,0,0,.7)" }}>
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
