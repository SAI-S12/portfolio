import React, { useState } from "react";
import "./Main.css";
import logo from "./../../assets/image2-removebg.png";
import logo1 from "./../../assets/image2.jpg";
import resume from "../../assets/sairesume12.pdf";
import { BsGithub, BsLinkedin, BsYoutube } from "react-icons/bs";

const Main = ({ setOn, isOn }) => {
  return (
    <div className={isOn ? "p11" : "p1"}>
      <div className="p2">
        <div className="p3">
          <div className="p5">
            <h1 className="p6">Hello I'm Sai</h1>
            <h1 className="p7" contentEditable="true">
              Web/Mobile Developer
            </h1>
            <p className="p8">
              seamlessly blending the world of code and creativity as web
              developer and UI/UX designer , creating captivationg digital
              experience
            </p>
            <div className={isOn ? "icns" : "icons"}>
              <a
                href="https://www.linkedin.com/in/sai-s12/"
                style={{ color: "white" }}
              >
                {" "}
                <BsLinkedin />
              </a>
              <a href="https://github.com/SAI-S12">
                {" "}
                <BsGithub />
              </a>
              <a href="">
                <BsYoutube />
              </a>
            </div>
            <button className={isOn ? "p9" : "p99"}>
              <a
                href={resume}
                download="resume"
                style={{ color: isOn ? "black" : "white" }}
              >
                Download cv
              </a>
            </button>
          </div>
        </div>
        <div className="p4">
          <div className={isOn ? "p12" : "p10"}>
            <img src={isOn ? logo1 : logo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
