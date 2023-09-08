import React from 'react'
import 
{ 
  ContainerHome, 
  ContentBanner, 
  SectionService 
} 
from './styles'

import Header from '../../components/Header'
import NexaBannerPng from '../../assets/img/nexabannerb.png'
import ArticleSlide from '../../components/ArticleSlider'



const Home = () => {
  return (
   <ContainerHome>
    <Header />

    <ContentBanner>
    <img src={NexaBannerPng} alt="" />
    <h1>Criação que inspira mudança!</h1>
    <p>Estamos empenhados em avançar rumo ao progresso, 
      combinando sabedoria e iniciativa em todas as etapas 
      de construção de produtos e empreendimentos digitais, 
      com um histórico sólido nos respaldando. Transformamos 
      ideias em realidade e buscamos o sucesso em conjunto.
      </p>
      <button>Converse com a Nexa</button>

      <SectionService>
        <h2>Conheça nossos serviços</h2>

        <ArticleSlide />

      </SectionService>
  
    </ContentBanner>
    
   </ContainerHome>
  )
}

export default Home