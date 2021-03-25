import React from 'react'
import Post from './Post'
import "./Prosjekter.css"
import reactnodefb from "./reactnodefirebase.png";
import ig from "./igklonemini.jpg"
import ez from "./ez.gif";
const Prosjekter = () => {
    return (
        <div className="prosjekt">
          <Post 
          message="Animasjon laget i ThreeJS (Mer smooth enn GIFen)"
          timestamp="25.03.2021 07:55"
          username="Morten Berge"
          image={ez}>

          </Post>
          <Post 
          message="IG Klone laget i React"
          timestamp="25.03.2021 08:13"
          username="Morten Berge"
          image={ig}>
            
          </Post>
          <Post 
          message="Test"
          timestamp="10.10.10"
          username="Morten Berge"
          image={reactnodefb}>
            
          </Post>

          <Post 
          message="Test"
          timestamp="10.10.10"
          username="Morten Berge"
          image={reactnodefb}>
            
          </Post>
          
          </div>

        
        
        )
    }
export default Prosjekter;