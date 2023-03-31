import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import PublicIcon from '@mui/icons-material/Public';
import EcomIMG from '../../public/projects/ecom.png'
import Working from '../../public/projects/working.png'

function Project() {
  return (
      <>
    <h1 className='title proj_title'>Projects</h1>
    <div className='Project'>
    <img src={Working} alt='' className='working'/>
        <div className='project_cards'>
            <div className="project_1 proj">
                <div className="proj_card_icon">
                    <GitHubIcon className="proj_icon"/>
                    <PublicIcon className="proj_icon"/>
                </div>
                <div className='proj_card_content'>
                    <img src={EcomIMG} alt='' className="proj_image"/>
                    <div className='card_info'>
                    <h3 className='proj_card_title'>E-Commerce Website (React)</h3> 
                    <span className='proj_card_desc'>Full Fledged E-com website where people can buy activewear and trending footwears</span>
                        <ul className='key_properties'>
                            <li>» Real Time Database (Firebase)</li>
                            <li>» Material UI</li>
                            <li>» Fully Responsive</li>
                        </ul>
                    </div>                  
                </div>
            </div>
            <div className="project_2 proj">
                <div className="proj_card_icon">
                    <GitHubIcon className="proj_icon"/>
                    <PublicIcon className="proj_icon"/>
                </div>
                <div className='proj_card_content'>
                    <img src='https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712__340.jpg' alt='' className="proj_image"/>
                    <div className='card_info'>
                        <h3 className='proj_card_title'>Web Chatting Application (React)</h3>
                        <span className='proj_card_desc'>Something related to project i have completed</span>
                        <ul className='key_properties'>
                            <li>» Firestore Database (Firebase)</li>
                            <li>» Firestore Authentication (Firebase)</li>
                            <li>» Material UI</li>
                            <li>» Real Time Chatting</li>
                        </ul>
                    </div> 
                </div>
            </div>
            <div className="project_3 proj">
                <div className="proj_card_icon">
                     <GitHubIcon className="proj_icon"/>
                     <PublicIcon className="proj_icon"/>
                </div>
                <div className='proj_card_content'>
                    <img src='https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712__340.jpg' alt='' className="proj_image"/>
                    <div className='card_info'>
                        <h3 className='proj_card_title'>Crypto Informative Website (React)</h3>
                        <span className='proj_card_desc'>Something related to project i have completed</span>
                        <ul className='key_properties'>
                            <li>» Fetching Data (RAPID API)</li>
                            <li>» Real Time Data</li>
                            <li>» Fully Responsive</li>
                        </ul>
                    </div> 
                </div>
            </div>
            <div className="project_4 proj">
                <div className="proj_card_icon">
                    <GitHubIcon className="proj_icon"/>
                    <PublicIcon className="proj_icon"/>
                </div>
                <div className='proj_card_content'>
                    <img src='https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712__340.jpg' alt='' className="proj_image"/>
                    <div className='card_info'>
                        <h3 className='proj_card_title'>Bomber Game (HTML-CSS-JS)</h3>
                        <span className='proj_card_desc'>Something related to project i have completed</span>
                        <ul className='key_properties'>
                            <li>» HTML</li>
                            <li>» CSS</li>
                            <li>» JAVASCRIPT</li>
                        </ul>
                    </div> 
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Project