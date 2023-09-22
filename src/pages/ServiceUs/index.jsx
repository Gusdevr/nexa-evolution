import React from 'react'

import 
{ 
    ContainerServices,
    SectionIcon 
} 
from './styles'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import ClientPng from '../../assets/img/us/clienteservice.png'
import IconSaPng from '../../assets/icons/iconsa.png'
import IconSbPng from '../../assets/icons/iconsb.png'
import IconScPng from '../../assets/icons/iconsc.png'
import IconSdPng from '../../assets/icons/iconsd.png'
import WhatsAppButton from '../../components/Whatsap'


const ServiceUs = () => {

  return (
    <ContainerServices>
           <div content-header>
            <Header />

        </div>

        <WhatsAppButton />

        <div className='content-service'>


          
<div className='title-service'>
<h1>Serviços</h1>
<p>
Olá! Meu nome é nexa evolution e sou uma especialista em mídia social
apaixonada por ajudar empresas a alcançarem seu potencial máximo
online. Com uma vasta experiência em estratégias digitais, estou pronta
para impulsionar sua presença nas redes sociais e criar conexões
autênticas com seu público-alvo.

Compreendemos a importância das redes sociais na era digital e como elas
podem impactar diretamente os resultados de um negócio. Nossa
abordagem estratégica e criativa visa aumentar o engajamento, construir
relacionamentos duradouros e gerar um impacto positivo na percepção
da sua marca.
    </p>
    </div>


        <img src={ ClientPng } alt="" />
        



    </div>
    

    <SectionIcon>
     

         <div className='title-one'>
            <img  src={ IconSaPng } alt="" />
            <p>Estabelecemos uma marca<br /> ou identidade visual para o seu negócio</p>
            </div>
     
       

            <div>
            <img src={ IconSbPng } alt="" />
            <p>Impucionamos o seu negócio<br /> e ter altas taxas de conversão</p>
            </div>
      
     
       

            <div>
            <img src={ IconScPng } alt="" />
            <p>Oferecemos orientação em<br /> tecnologia e jornada de transformação digital</p>
            </div>
     

            <div>
            <img src={ IconSdPng } alt="" />
            <p> consultoria para expandir sua<br /> presença no mundo dos negócios digitais</p>
            </div>
    


    </SectionIcon>

   
   <div className='content-footer'>
<Footer/>
</div>
    </ContainerServices>
  )
}

export default ServiceUs