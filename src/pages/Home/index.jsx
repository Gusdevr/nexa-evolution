import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'


import 
{ 
  ContainerHome, 
  ContentBanner, 
  SectionService,
  SectionCase
} 
from './styles'

import Header from '../../components/Header'
import NexaBannerPng from '../../assets/img/bannernextaa.jpg'
import ArticleSlide from '../../components/ArticleSlider'
import Footer from '../../components/Footer'
import WhatsAppButton from '../../components/Whatsap'

import ViaRealPng from '../../assets/img/cases/viarealicon.png'
import IsmaelJpg from '../../assets/img/cases/ismael.jpg'
import fpartPng from '../../assets/img/cases/fpart.png'



const Home = () => {
 
  useEffect(() => {
    AOS.init();
  }, []);

  return (
   <ContainerHome>
    <Header />

<WhatsAppButton />

    <ContentBanner>

    
    <img src={NexaBannerPng} alt="" />
    <div className='title-banner'>
    <h1 data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
      Criação que inspira mudança!</h1>
    {/* <p>Estamos empenhados em avançar rumo ao progresso, 
      combinando sabedoria e iniciativa em todas as etapas 
      de construção de produtos e empreendimentos digitais, 
      com um histórico sólido nos respaldando. Transformamos 
      ideias em realidade e buscamos o sucesso em conjunto.
      </p> */}
      <a data-aos="fade-left"
         data-aos-anchor="#example-anchor"
         data-aos-offset="500"
         data-aos-duration="500" href="https://www.instagram.com/nexaevolution/"><button>Conheça nossos produtos</button></a>
      </div>

      <SectionService>
        <h2 data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
      Conheça nossos serviços</h2>

        <ArticleSlide />

      </SectionService>
  
    </ContentBanner>

    <h2 data-aos="fade-up"
        data-aos-anchor-placement="center-bottom">
      Nossas Histórias de Sucesso</h2>

    <SectionCase>

  
   
     <article className='case-viareal'>
     <a href="#"> <img src={ViaRealPng} alt="" /></a>
      <a href="#"><h3>Via Real</h3></a>

     </article>

     <article className='case-viareal'>
     <a href="#"> <img src={IsmaelJpg} alt="" /></a>
      <a href="#"><h3>Ismael Decor</h3></a>

     </article>

     <article className='case-viareal'>
      <a href="#"><img src={fpartPng} alt="" /></a>
      <a href="#"><h3>Fp Art</h3></a>

     </article>

     
     

    </SectionCase>


      <Footer />
    
   </ContainerHome>

  )
}

export default Home