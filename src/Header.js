import React from 'react';
import "./Header.css";
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import WorkIcon from '@material-ui/icons/Work';
import {Link} from "react-router-dom";





function Header() {

    
    return <div className="header">

            <div className="header__midten">
                <Link id="Main" to="/">
                    <div className="header__option ">
                        <p>Home</p>
                        <HomeIcon fontSize="large" />
                    </div>
                </Link>

                <Link id="Om" to="Om">
                    <div className="header__option">
                        <p>About</p>
                        <PersonIcon fontSize="large" />
                    </div>  
                </Link>

                <Link id="Prosjekter" to="Prosjekter">
                    <div className="header__option">
                    <p>Projects</p>
                        <WorkIcon fontSize="large" />
                    </div>    
                </Link>
            </div>
        </div>
        }

export default Header;
