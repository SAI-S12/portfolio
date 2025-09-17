import React, { useState } from 'react'
import "./Main.css"
import logo from "./../../assets/image2-removebg.png"
import logo1 from "./../../assets/image2.jpg"
import resume from "../../assets/sairesume12.pdf"


const Main = ({setOn,isOn}) => {

  return (
    <div className={isOn?"p11":"p1"}>
      <div className="p2">
        <div className="p3">
           <div className="p5">
            <h1 className='p6'>Hello I'm Sai</h1>
            <h1 className='p7' contentEditable="true">Web Developer</h1>
            <p className='p8'>seamlessly blending the world of code and creativity as web developer and UI/UX designer , creating captivationg digital experience</p>
            <div className={isOn?"icns":"icons"}>
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <title>X</title>
                <path
                  d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
              </svg>
              <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <title>YouTube</title>
                <path
                  d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <title>Telegram</title>
                <path
                  d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
            </div>
            <button className={isOn?"p9":"p99"}><a href={resume} download="resume">Download cv</a></button>
           </div>
        </div>
        <div className="p4">
         <div className={isOn?"p12":"p10"}>
         <img src={ isOn?logo1:logo} alt="" />
         </div>
        </div>
      </div>
    </div>
  )
}

export default Main