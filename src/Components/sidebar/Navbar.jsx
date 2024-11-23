import React from 'react'
import "./Navbar.css"
import profil from "./../../assets/image2.jpg"
import profil1 from "./../../assets/image2-removebg.png"
import { NavLink} from 'react-router-dom'
import { PiSunLight } from 'react-icons/pi'
import { BiMoon } from 'react-icons/bi'

const Navbar = ({isOn,setOn}) => {
  
  return (
    <div className={isOn?"hero1":"hero11"}>
      <div className="pp3">
      {isOn ? <BiMoon className={isOn?"pp1":"pp11"} onClick={()=>(setOn(false))}/>: <PiSunLight className={isOn?"pp1":"pp11"} onClick={()=>(setOn(true))}/> }
      </div>
       <div className="hero2">
       <div className={isOn?"hero4":"hero44"}>
       <img src={isOn?profil1:profil} alt="" />
       </div>
       </div>
       <div className="links">
        <NavLink to="/"  className="n1"><h2 className={isOn?"e2":"ee2"}>profil</h2></NavLink>
        <NavLink to="/skills"  className="n1"><h2 className={isOn?"e2":"ee2"}>About</h2></NavLink>
        <NavLink to="/project"  className= "n1"><h2 className={isOn?"e2":"ee2"}>Services</h2></NavLink>
        <NavLink to="/services" className= "n1"><h2 className={isOn?"e2":"ee2"}>Projects</h2></NavLink>
        <NavLink to="/contact" className= "n1"><h2 className={isOn?"e2":"ee2"}>Contact</h2></NavLink>
       </div>
    </div>
  )
}

export default Navbar
