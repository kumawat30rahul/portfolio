import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import HiiImage from '../../public/hii.png'
import Arrow from '../../public/iconsgif/arrow2.gif'

function Home() {
  return (
    <>
        <div className='home'>
            <div className="name">
                <span className='greetings'>खम्मा घणी || नमस्कार</span>
                <span className='home_name'>I'm Rahul Kumawat</span>
                <span className='description'>Passionate Frontend Developer && Sports Fanatic </span>
                <div className='socials'>
                    <GitHubIcon className='icon'/>
                    <LinkedInIcon className='icon'/>
                    <EmailIcon className='icon'/>
                </div>
            </div>
            <div className="photo">
                <img src={HiiImage} className="hii_image"/>
            </div>
        </div>
        <div className='downarrow'>
            <img src={Arrow} alt="" className='downwardArrow'/>
        </div>
    </>
  )
}

export default Home