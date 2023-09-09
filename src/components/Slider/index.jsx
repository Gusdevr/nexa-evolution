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
          <h3></h3>
          <span></span>
          <button></button>
        </article>

        <article className='article-app'>
          <img src={ViaRealPng} alt="" />
          <h3></h3>
          <span></span>
          <button></button>
        </article>
    </StyledAwesomeSlider>
  )
}

export default Slider
