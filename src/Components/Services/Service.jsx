import React from "react";
import "./Service.css";
import { BsArrowUpCircle } from "react-icons/bs";
import pic1 from "./../../assets/p1.jpg";
import pic2 from "./../../assets/p2.jpg";
import pic3 from "./../../assets/banner3.jpg";
import pic4 from "./../../assets/bannerpic1.jpg";
import pic5 from "./../../assets/bannerpic2.jpg";
import pic6 from "./../../assets/p6.jpg";

const Service = ({ isOn }) => {
  return (
    <div className={isOn ? "s1" : "ss1"}>
      <div className="s2">
        <h2> projects</h2>
        <div className="s4">
          <div className="s5">
            <img src={pic5} alt="" />
            <div className="s6">
              <h3>web E-commerce application</h3>
              <a href=" https://shopperservice.netlify.app  ">
                <a href="">here</a>
              </a>
            </div>
          </div>
          <div className="s5">
            <img src={pic4} alt="" />
            <div className="s6">
              <h3>Mobile developement</h3>
              <p>
                developeed ecommerce moble application it has 40-50 screens and
                bottom navigation
              </p>
              <a href="">here</a>
            </div>
          </div>
          <div className="s5">
            <img src={pic3} alt="" />
            <div className="s6">
              <h3>food web application</h3>
              <a href="https://foodeaterapp.netlify.app ">here</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
