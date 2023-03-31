import React from 'react'  
import footballImg from '../../public/Football2.png'

function About() {
  return (
    <div className='About'>
        <div className="content">
            <h1 className="title">About Me</h1>
            <span className="about_description">
             I'm a frontend developer with expertise in building websites using React. I am passionate about     creating dynamic and interactive web applications that offer seamless user experiences.  When I'm not coding, I love watching and playing sports, which keeps me active and refreshed.
            </span>
        </div>
        <div className="image">
            <img src={footballImg} alt='' className='about_image'/>
        </div>
    </div>
  )
}

export default About