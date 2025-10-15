import React from 'react'
import "./Project.css"
import { CgCode, CgDesignmodo } from 'react-icons/cg'
import { BsApp } from 'react-icons/bs'
import { BiArrowToRight } from 'react-icons/bi'

const Project = ({isOn,setOn}) => {
  return (
    <div className={isOn?"t1":"tt1"}>
           <div className='t2'>
                   <h2>Developement</h2>
                   <div className="t3">
                    <div className={isOn?"t4":"tt4"}>
                      <CgCode  className='t8'/>
                      <h3>web developement</h3>
                      <p> developing user interface  website and maintainance.and as well as developing backe-end .creating a single static websites for users  </p>
                      <a>learn more<BiArrowToRight/></a>
                    </div>
                    <div className={isOn?"t4":"tt4"}>
                      <BsApp className='t8'/>
                       <h3>Mobile Developement</h3>
                       <p>specialize in building high-performance mobile applications that combine sleek design with powerful functionality. Whether you're launching a brand or scaling an existing product, our mobile solutions are crafted to captivate users and drive results.</p>
                       <a>learn more<BiArrowToRight/></a>
                      </div>
                      <div className={isOn?"t4":"tt4"}>
                        <CgDesignmodo className='t8'/>
                       <h3>Data Analysis</h3>
                       <p>turn raw data into actionable insights that drive smarter decisions. From business metrics to user behavior, our analysis helps uncover patterns, optimize performance, and fuel growth. </p>
                       <a>learn more<BiArrowToRight/></a>
                      </div>
                   </div>
           </div>
    </div>
  )
}

export default Project