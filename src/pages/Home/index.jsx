import React from 'react'
import 
{ 
  ContainerHome, 
  ContentBanner, 
  SectionService,
  SectionCase
} 
from './styles'

import Header from '../../components/Header'
import NexaBannerPng from '../../assets/img/nexabannerc.png'
import ArticleSlide from '../../components/ArticleSlider'
import Footer from '../../components/Footer'
import WhatsAppButton from '../../components/Whatsap'

import ViaRealPng from '../../assets/img/cases/viarealicon.png'
import IsmaelJpg from '../../assets/img/cases/ismael.jpg'
import fpartPng from '../../assets/img/cases/fpart.png'



const Home = () => {

  return (
   <ContainerHome>
    <Header />

<WhatsAppButton />

    <ContentBanner>

    
    <img src={NexaBannerPng} alt="" />
    <div className='title-banner'>
    <h1>Criação que inspira mudança!</h1>
    {/* <p>Estamos empenhados em avançar rumo ao progresso, 
      combinando sabedoria e iniciativa em todas as etapas 
      de construção de produtos e empreendimentos digitais, 
      com um histórico sólido nos respaldando. Transformamos 
      ideias em realidade e buscamos o sucesso em conjunto.
      </p> */}
      <a href=""><button>Conheça nossos produtos</button></a>
      </div>

      <SectionService>
        <h2>Conheça nossos serviços</h2>

        <ArticleSlide />

      </SectionService>
  
    </ContentBanner>

    <h2>Nossas Histórias de Sucesso</h2>

    <SectionCase>

  
   
     <article className='case-viareal'>
     <a href=""> <img src={ViaRealPng} alt="" /></a>
      <a href=""><h3>Via Real</h3></a>

     </article>

     <article className='case-viareal'>
     <a href=""> <img src={IsmaelJpg} alt="" /></a>
      <a href=""><h3>Ismael Decor</h3></a>

     </article>

     <article className='case-viareal'>
      <a href=""><img src={fpartPng} alt="" /></a>
      <a href=""><h3>Fp Art</h3></a>

     </article>

     
     

    </SectionCase>


      <Footer />
    
   </ContainerHome>

  )
}

export default Home