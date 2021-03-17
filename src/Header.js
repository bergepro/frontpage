import React from 'react';
import "./Header.css";
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import WorkIcon from '@material-ui/icons/Work';





function Header() {

    
    return <div className="header">

            <div className="header__midten">
                <div className="header__option 
                header__option--active">
                    <p>Home</p>
                    <HomeIcon fontSize="large" />
                </div>

                
                <div className="header__option">
                    <p>About</p>
                    <PersonIcon fontSize="large" />
                </div>  

                <div className="header__option">
                <p>Projects</p>
                    <WorkIcon fontSize="large" />
                </div>    
            </div>
        </div>
        }

export default Header;
