import React from 'react'
import "./Service.css"
import { BsArrowUpCircle } from 'react-icons/bs'
import pic1 from "./../../assets/p1.jpg";
import pic2 from "./../../assets/p2.jpg";
import pic3 from "./../../assets/p3.jpg";
import pic4 from "./../../assets/p4.jpg";
import pic5 from "./../../assets/p5.jpg";
import pic6 from "./../../assets/p6.jpg";

const Service = ({ isOn }) => {
  return (
    <div className={isOn ? "s1" : "ss1"}>
      <div className="s2">
        <h2> projects</h2>
        <div className="s4">
          <div className="s5">
            <img src={pic1} alt="" />
            <div className="s6">
              <h2>web E-commerce application</h2>
              <a href=" https://shopperservice.netlify.app  "><BsArrowUpCircle className='ss2' /></a></div>
          </div>
          <div className="s5">
            <img src={pic2} alt="" />
            <div className="s6">
              <h2>UI/UX design</h2>
              <BsArrowUpCircle  className='ss2' /></div>
          </div>
          <div className="s5">
            <img src={pic3} alt="" />
            <div className="s6">
              <h2>food web application</h2><a href="https://foodeaterapp.netlify.app "><BsArrowUpCircle  className='ss2' /></a></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service