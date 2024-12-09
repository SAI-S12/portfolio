import React from 'react'
import "./Contact.css"
import { MdEmail } from 'react-icons/md'
import { BiPhone } from 'react-icons/bi'
import { CiLocationOn } from 'react-icons/ci'
import { LiaLinkedin } from 'react-icons/lia'
import { DiGithub } from 'react-icons/di'

const Contact = ({isOn}) => {
  return (
    <div className={isOn?"c1":"cc1"}>
      <div className="c2">
        <div className="c3">
           <h2> Contact me</h2>
           <p><MdEmail/>sxxxxxx12@gmail.com</p>
           <p><BiPhone/>+91 9XXXXXXXX0</p>
           <p><CiLocationOn/>kamalanagr,chaitanyapuri ,hyderabad </p>
           <p><LiaLinkedin/>linkedin.com/sai</p>
           <p><DiGithub/>github/.com/SAI-S12</p>
           <div className="icons">

           </div>
           <button className={isOn?"c5":"c55"}>Download CV</button>
        </div>
        <div className="c4">
         <div className="c6">
          <input type="text"  placeholder='Your name'/>
          <input type="text" placeholder='Your Email' />
          <textarea name="" id="" placeholder='your message'></textarea>
          <button className={isOn?"c7":"c77"} > submit</button>
         </div>
        </div>
      </div>

    </div>
  )
}

export default Contact