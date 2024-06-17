import React from 'react'
import slack_pic from "./slack_pic.png"

const Pic = () => {
  return (
    <div className="profilePicture">
      <img src={slack_pic} alt='profile pic'/>
    </div>
  )
}

export default Pic


//background: "linear-gradient(to left, #bdc3c7, #2c3e50)"