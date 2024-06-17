import React from "react";
import Pic from "./Pic.jsx"
import {
  FaLinkedinIn,
  FaGithub,
  FaMediumM,
  FaSlackHash
} from "react-icons/fa";
//import Typewriter from 'typewriter-effect';

const Banner = () => {
  return (
    <div className="header">
      <div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="header__content">
                <div className="header__section">
                  <ul className="header__ul">
                    <li>
                      <a href="https://www.linkedin.com/in/janakbharadwaj-adluri/" target="_blank" rel="noreferrer"><FaLinkedinIn className="headerIcon" /></a>
                    </li>
                    <li>
                      <a href="https://github.com/janakbharadwaj" target="_blank" rel="noreferrer"><FaGithub className="headerIcon" /></a>
                    </li>
                    <li>
                      <a href="https://hashnode.com/@janakbharadwaj95" target="_blank" rel="noreferrer"><FaSlackHash className="headerIcon" /></a>
                    </li>
                    <li>
                      <a href="https://janakbharadwaj-adluri.medium.com/" target="_blank" rel="noreferrer"><FaMediumM className="headerIcon" /></a>
                    </li>
                  </ul>
                  <h1 style={{color:"white"}}>
                    Am Janakbharadwaj
                    {/* <Typewriter
                      onInit={(typewriter)=>{
                        typewriter.typeString("Am Janakbharadwaj")
                        .start()
                      }}
                    /> */}
                  </h1>
                  <p style={{color:"white",fontWeight:"600"}}>
                     Full Stack Developer
                    {/* <Typewriter
                      onInit={(typewriter)=>{
                        typewriter
                        .typeString("Full Stack Developer")
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString("Respect time, be punctual")
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString("Comfortable to work remote and onsite")
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString("Full Stack Developer")
                        .start()
                      }}
                    />​ */}
                  </p>
                  <div className="header__buttons">
                    <a href="https://drive.google.com/u/0/uc?id=1WKmOQd4R-DR6l5LhxSOGPNP6yhc9BA2k&export=download" className="btn btn-outline">
                      Resume 
                    </a>
                  </div>
                </div>
                
              </div>
            </div>
            <Pic/>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Banner;
