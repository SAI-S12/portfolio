import React from 'react'
import "./Skills.css"
import logo from "../../assets/image2.jpg"
import logo1 from "../../assets/image2-removebg.png"

const Skills = ({ isOn, setOn }) => {
  return (
    <div className={isOn ? "b1" : "bb1"}>
      <div className="b2">
        {isOn ? <img src={logo} alt="" /> : <img src={logo1} />}
      </div>
      <div className="b3">
        <div className="b4">
          <h2>About me</h2>
          <p>Iam sai. iam from nizamabad.i have completed my bachelor of technology in civil engineering. Highly motivated Bachelor of technology graduate seeking to leverage my skills and knowledge to
            contribute to a dynamic organization. Aspiring to secure a challenging role that provides opportunities for
            professional growth and enables me to utilize my technical expertise, problem-solving skills, and ability to
            work in a team-oriented environment to deliver exceptional results. </p>
        </div>
        <div className="b5">
          <div className="b6">
            <h3 className='ss'>skills</h3>
            <p>java </p>
            <p>sql</p>
            <p>nodejs </p>
            <p>react js</p>
            <p>javascript</p>
            <p>html</p>
            <p>css</p>
          </div>
          <div className="b6">
            <h3 className='ss'>experience In </h3>
            <p>web developement</p>
            <p>mern stack developement</p>
            <p>database management</p>
            <p>java developement</p>
          </div>
          <div className="b6">
            <h3 className='ss'>education</h3>
            <p>bachelore of technology in civil engg <span>2018-2022</span> </p>
            <p>technical diploma  in civil engg        <span>2015-2018</span></p>
            <p>secondary school <span>2014-2015</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills