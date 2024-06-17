import React from 'react'
// import slack_pic from "./slack_pic.png"
import profile_new from "./profile_new.jpg"
import {
    FaLinkedinIn,
    FaGithub,
    FaMediumM
} from "react-icons/fa";
//import { Icon, InlineIcon } from '@iconify/react';
//import hashnodeIcon from '@iconify-icons/simple-icons/hashnode';
//import Typewriter from 'typewriter-effect';

const Header = () => {
    return (
        <div className='newHeader_parent'>
            <div className='newHeader'>
                <div className='newHeader_picDiv'>
                    <img src={profile_new} alt='profile pic'/>
                </div>
                {/* <br/> */}
                <div className='newHeader_textDiv'>
                <div className="header__content">
                    <div className="header__section">                        
                        <h1 style={{color:"white",fontSize:"35px",marginTop:"10px"}}>
                            Janakbharadwaj Adluri
                        </h1>
                        <p style={{color:"white",fontWeight:"600",marginBottom:"5px"}}>
                            Full Stack Developer
                            {/* <Typewriter
                                onInit={(typewriter)=>{
                                    typewriter
                                    .typeString("Respect time, be punctual")
                                    .pauseFor(2000)
                                    .deleteAll()
                                    .typeString("Comfortable to work remote and onsite")
                                    .pauseFor(2000)
                                    .deleteAll()
                                    .start()
                                }}
                            />​ */}
                        </p>
                        <br/>
                        <ul className="header__ul">
                            <li>
                                <a href="https://www.linkedin.com/in/janakbharadwaj-adluri/" target="_blank" rel="noreferrer"><FaLinkedinIn className="headerIcon" /></a>
                            </li>
                            <li>
                                <a href="https://github.com/janakbharadwaj" target="_blank" rel="noreferrer"><FaGithub className="headerIcon" /></a>
                            </li>
                            <li>
                                <a href="https://janakbharadwaj-adluri.medium.com/" target="_blank" rel="noreferrer"><FaMediumM className="headerIcon" /></a>
                            </li>
                            <li>

                            </li>
                        </ul>
                        <br/>
                        <div style={{marginBottom:"30px"}}>
                            <a href="https://drive.google.com/file/d/1gV_CKnpSptN7LhoC-8cVLUvYz4lzW2mK/view?usp=sharing" className="btn btn-outline">
                                Resume 
                            </a>
                        </div>
                        <br/>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Header
