import React from 'react'
import profile_new from "./profile_new.jpg"
import {
    FaLinkedinIn,
    FaGithub,
    FaMediumM
} from "react-icons/fa";
import { SiHugo } from "react-icons/si";

const NewHead = () => {
    return (
        <div className='newHead_parent'>
            <div className='newHead_img'>
                <img src={profile_new} alt='profile pic'/>
            </div>
            <div className='newHead_text'>
                <div className="header__section">                        
                        <h1 style={{color:"white",fontSize:"35px",marginTop:"10px"}}>
                            Janakbharadwaj Adluri
                        </h1>
                        <p style={{color:"white",fontWeight:"600",marginBottom:"15px"}}>
                            Full Stack Developer
                        </p>
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
                                <a href="https://hashnode.com/@janakbharadwaj95" target="_blank" rel="noreferrer"><SiHugo className="headerIcon" /></a>
                            </li>
                        </ul>
                        <br/>
                        <div style={{marginBottom:"30px"}}>
                            <a href="https://drive.google.com/file/d/14fD1nQh8QDtN0DKEDMSfsDHTutEw0ZbS/view?usp=sharing&export=download" className="btn btn-outline">
                                Resume 
                            </a>
                        </div>
                        
                    </div>
            </div>
        </div>
    )
}

export default NewHead
