import React from 'react'
import "./Contact.css"
import { MdEmail } from 'react-icons/md'
import { BiPhone } from 'react-icons/bi'
import { CiLocationOn } from 'react-icons/ci'
import { LiaLinkedin } from 'react-icons/lia'
import { DiGithub } from 'react-icons/di'

const Contact = ({isOn}) => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "bc9117d7-4dd1-4ed0-ab12-5833e351dc31");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      event.target.reset()
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className={isOn?"c1":"cc1"}>
      <div className="c2">
        <div className="c3">
           <h2> Contact me</h2>
           <p><MdEmail/>sxxxxxx12@gmail.com</p>
           <p><BiPhone/>+91 9XXXXXXXX0</p>
           <p><CiLocationOn/>Panjagutta,hyderabad </p>
           <p><LiaLinkedin/>linkedin.com/XYZ</p>
           <p><DiGithub/>github/.com/XXX/X12</p>
           <button className={isOn?"c5":"c55"}>Download CV</button>
        </div>
        <div className="c4">
        <form action="" onSubmit={onSubmit}>
        <div className="c6">
           <div className="cc"><h2>Get in Touch</h2></div>
          <input type="text" name="name" placeholder='Your name'/>
          <input type="text" name="email" placeholder='Your Email' />
          <textarea name="message" id="" placeholder='your message'></textarea>
          <button className={isOn?"c7":"c77"} type='submit'> submit</button>
          <div className='c12'><p className='c13'>{result}</p></div>
         </div>
        </form>
        </div>
      </div>

    </div>
  )
}

export default Contact