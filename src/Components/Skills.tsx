import React from 'react'
import Bootstrap from '../../public/Skills/bootstrap.png'
import CSS from '../../public/Skills/css.png'
import HTML from '../../public/Skills/Html.png'
import Firebase from '../../public/Skills/firebase.png'
import Java from '../../public/Skills/java.png'
import Js from '../../public/Skills/js.png'
import MUI from '../../public/Skills/mui.png'
import ReactIcon from '../../public/Skills/react.png'
import Redux from '../../public/Skills/redux.png'
import TS from '../../public/Skills/ts.png'
import SkillsStickman from '../../public/skillsStickman.png'
import Tooltip from '@mui/material/Tooltip'

function Skills() {

    const Icons = [HTML,CSS,Js,ReactIcon,Redux,Firebase,Java,Bootstrap,MUI,TS]
    const IconsTootltip = ['HTML','CSS','Javascript','React','Redux','Firebase','Java','Bootstrap','Material UI','TypeSccript']
  return (
    <div className='skills'>
        <h1 className='title'>Skills</h1>
        <div className="skills_div">
            {Icons.map((icon:any,index)=>(
                <div className="icon_div" key={index}>
                    <Tooltip title={IconsTootltip[index]} placement="top-start" className='tooltip'>
                     <img src={icon} alt="" className='skills_image' />
                    </Tooltip>
                </div>
            ))}
        </div>
        <img src={SkillsStickman} alt='' className='skills_stickman' />
    </div>
  )
}

export default Skills