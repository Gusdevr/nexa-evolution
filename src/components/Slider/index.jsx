import React from 'react'

import 'react-awesome-slider/dist/styles.css'
import { StyledAwesomeSlider } from './styles'

import IsmaelDecorJpg from '../../assets/img/cases/ismael.jpg'
import ViaRealPng from '../../assets/img/cases/viarealicon.png'


const Slider = () => {
  return (
    <StyledAwesomeSlider>
  <article className='article-site'>
          <img src={IsmaelDecorJpg} alt="" />
    
    
        </article>

        <article className='article-app'>
          <img src={ViaRealPng} alt="" />
   
      
        </article>
    </StyledAwesomeSlider>
  )
}

export default Slider
