import React from 'react';
import logo from "../../images/logo3.png";
import "./Sidebar.scss"
import { Link, NavLink } from 'react-router-dom';
import ExploreIcon from '@mui/icons-material/Explore';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import AlbumIcon from '@mui/icons-material/Album';
import MicIcon from '@mui/icons-material/Mic';
import RadioIcon from '@mui/icons-material/Radio';

const Sidebar = () => {

    const links = [
        {
            name: "Explore",
            path: "/",
            icon: <ExploreIcon style={{ fontSize: "1.6rem" }} />
        },
        {
            name: "Genres",
            path: "/genres",
            icon: <VolumeUpIcon style={{ fontSize: "1.6rem" }} />
        },
        {
            name: "Albums",
            path: "/albums",
            icon: <AlbumIcon style={{ fontSize: "1.6rem" }} />
        },
        {
            name: "Artist",
            path: "/artist",
            icon: <MicIcon style={{ fontSize: "1.6rem" }} />
        },
        {
            name: "Radio",
            path: "/radio",
            icon: <RadioIcon style={{ fontSize: "1.6rem" }} />
        }
    ]
    return (
        <>
            <aside className="sidebar">
                <div className="sidebar__logo">
                    <Link to="/">
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div className="sidebar__menu">
                    <span className="menu-span">Menu</span>
                    <ul>
                        <li>
                            {
                                links.map((link, index) => (
                                    <NavLink key={index} to={link.path} className="nav-link">
                                        {link.icon}
                                        {link.name}
                                    </NavLink>
                                ))
                            }
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    )
}

export default Sidebar
