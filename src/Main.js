import React from 'react'
import Header from "./Header";
import morten from "./Morten.jpg"
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import HomeIcon from '@material-ui/icons/Home';
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';

function Main() {
    return (
            <div className="app__body">
                <div className="body__left">
                  <h1>Morten Berge</h1>
                  <h2>IT-Student</h2>
                  <h4><MailIcon /><a href="mailto:Morten@berge.pro">Morten@berge.pro</a></h4>
                  
                  <h4><PhoneIcon/>97 95 96 80</h4>
                  <h4><HomeIcon/>Gullbringvegen 28-420, 3800 Bø i telemark</h4>
                  <div className="linker">
                  <a href="https://github.com/bergepro">
                    <GitHubIcon />  
                  </a>
                  <a href="https://www.linkedin.com/in/morten-berge-8280a91aa/">
                    <LinkedInIcon /> 
                  </a>
                  <a href="https://facebook.com/smekkis">
                    <FacebookIcon />  
                  </a>
                  </div>
              </div>
              <div className="body__right">
              <img src={morten}alt="morten"></img>
              </div>
            </div>
    )
}

export default Main
