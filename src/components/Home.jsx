import React,{useEffect} from 'react';
import logo from "./logo.jpeg"
import video from "./hero.mp4"
import "./style.css"


function Home() {

  return (
    <div>
      <nav id="nav">
        <img src={logo} alt="" />
        <h4>Home</h4>
        <h4>Services</h4>
        <h4>Projects</h4>
        <h4>About</h4>
        <button className='Contact-button'>Contact Us</button>
      </nav>

      <video autoPlay loop muted>
              <source src={video} />
      </video>
      <div id="main">
        <div id="page1">
          <h1>Designing awesome brands & experiences</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam
            consequuntur mollitia est explicabo recusandae nam nesciunt nulla
            corrupti eaque commodi.
                  </p>
                  <div className='btn-container'> <button className='Start-button'>GET STARTED</button>
                   <button className='learn-button'>LEARN MORE</button></div>
                 
        </div>
          </div>
          </div>
  );
}

export default Home;
