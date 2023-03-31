import React from 'react'
import BackgroundImage from '../../public/b2.svg'
import About from './About'
import Home from './Home'
import Skills from './Skills'
import './style.css'
function Background() {
  return (
    <div className='background'>
        <div className='background_image_div'>
            <img src={BackgroundImage} className='background_image'/>
        </div>
        <div className='contents'>
          <Home />
          <About />
          <Skills />
        </div>
    </div>
  )
}

export default Background