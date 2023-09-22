import React, { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import DeveloperJpg from '../../assets/img/us/developer.jpg'
import AppsPng from '../../assets/img/us/apps.png'
import BotPng from '../../assets/img/us/bot.png'
import SitePng from '../../assets/img/us/site.png'
import TraficPng from '../../assets/img/us/trafic.png'
import RedesPng from '../../assets/img/us/redes.png'
import WhatsAppButton from '../../components/Whatsap'


import 
{ 
    ContentUs, 
    SectionUs,
    ContentService
} 
from './styles'


const QuemSomos = () => {

  useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    <ContentUs>
        <div className='content-header'>
        <Header/>
        </div>

<WhatsAppButton />

        <SectionUs>

            <img data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" src={ DeveloperJpg } alt="" />

      

        <h1 data-aos="zoom-out-up">Quem Somos</h1>
        <p>
            Somos a Nexa Evolution, especializados em produtos 
            e soluções digitais como websites, landing pages, 
            apps mobile, tráfego pago, marketing digital, 
            gestão empresarial e mais. Com um histórico sólido, estamos prontos 
            para combinar sabedoria e iniciativa em cada fase do processo 
            de construção de produtos e empreendimentos digitais. 
            Estamos comprometidos em transformar ideias em realidade e 
            impulsionar o sucesso em conjunto.
            Estamos curiosos em ouvir suas ideias, contate-nos e vamos conversar!
         
            </p>
 

        
            </SectionUs>

         

            <ContentService>

                
            <div className='title-service'>
            <h2 data-aos="zoom-out-left">Nossos Serviços</h2>
            </div>

            <article className=''>
     <a  href=""><img data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" src={ AppsPng } alt="" /> </a>
      <a href=""><h3>Apps Mobile</h3></a>

     </article>

     <article className=''>
     <a href=""> <img data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" src={ BotPng } alt="" /></a>
      <a href=""><h3>Bots e Automatização</h3></a>

     </article>

     <article className=''>
      <a href=""><img data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" src={ SitePng } alt="" /></a>
      <a href=""><h3>Sites/Landing Pages</h3></a>

     </article>

     <article className=''>
      <a href=""><img data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" src={ TraficPng } alt="" /></a>
      <a href=""><h3>Tráfego Pago</h3></a>

     </article>

     <article className=''>
      <a href=""><img data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" src={ RedesPng } alt="" /></a>
      <a href=""><h3>Redes Sociais</h3></a>

     </article>



            </ContentService>

          
<div className='content-footer'>
<Footer/>
</div>
      
    </ContentUs>
  )
}

export default QuemSomos