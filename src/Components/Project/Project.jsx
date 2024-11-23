import React from 'react'
import "./Project.css"
import { CgCode, CgDesignmodo } from 'react-icons/cg'
import { BsApp } from 'react-icons/bs'
import { BiArrowToRight } from 'react-icons/bi'

const Project = ({isOn,setOn}) => {
  return (
    <div className={isOn?"t1":"tt1"}>
           <div className='t2'>
                   <h2>services</h2>
                   <div className="t3">
                    <div className={isOn?"t4":"tt4"}>
                      <CgCode  className='t8'/>
                      <h3>web developement</h3>
                      <p> developing user interface  website and maintainance.and as well as developing backe-end .creating a single static websites for users  </p>
                      <a>learn more<BiArrowToRight/></a>
                    </div>
                    <div className={isOn?"t4":"tt4"}>
                      <BsApp className='t8'/>
                       <h3>content creation</h3>
                       <p>establishing and creating  acompany brands though engaging and intresting online written content.maintaining and updating websites ,blogging ,article writing, photography, videography .</p>
                       <a>learn more<BiArrowToRight/></a>
                      </div>
                      <div className={isOn?"t4":"tt4"}>
                        <CgDesignmodo className='t8'/>
                       <h3>UI/UX Design</h3>
                       <p>creating a user-centered design for digital products such as websites ,mobil apps and software interface .primary focus is on enhancing user satisfaction and usabilityu by improving accesiblity efficiancy and aesthetics of product </p>
                       <a>learn more<BiArrowToRight/></a>
                      </div>
                   </div>
           </div>
    </div>
  )
}

export default Project