import React, { useEffect } from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css';

import 
{ 
    ContainerCases,
    SectionCase 
} 
from './styles'
import Header from '../../components/Header'
import CasesPng from '../../assets/img/us/casesus.png'
import Footer from '../../components/Footer'
import ViaRealPng from '../../assets/img/cases/viarealicon.png'
import IsmaelJpg from '../../assets/img/cases/ismael.jpg'
import fpartPng from '../../assets/img/cases/fpart.png'
import WhatsAppButton from '../../components/Whatsap'

const Cases = () => {

  useEffect(() => {
    AOS.init();
  }, []);
  

  return (
    <ContainerCases>
        <div content-header>
            <Header />

        </div>
        <WhatsAppButton />

        <div className='content-case'>


        <img data-aos="fade-up"
     data-aos-duration="3000" src={ CasesPng } alt="" />

      
<div className='title-case'>
<h1 data-aos="zoom-out-left">Cases</h1>
<p>
Na Nexa, temos o orgulho de atender uma ampla gama de clientes, 
desde grandes corporações até pequenas empresas, com um objetivo 
claro em mente: impulsionar sua presença digital ou automatizar 
processos que afetam diretamente suas operações diárias e 
por conseguinte, suas interações com os clientes. 
Cada projeto que abraçamos é concebido com uma estratégia sólida 
e um foco inabalável em alcançar resultados positivos e personalizados 
para cada cliente. Não somos apenas uma empresa de desenvolvimento, 
mas sim parceiros comprometidos na jornada de sucesso de nossos clientes,   
pois seu êxito é o nosso também.
    </p>
    </div>

    </div>

   
    <div className='content-footer'>

    <Footer />

    </div>

    <SectionCase>

        <div className='title-case'>
        <h2 data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">Aqui estão alguns dos projetos que nos enchem de orgulho<br />
              por ter participado</h2>
        </div>

        <article className='case-viareal'>
     <a href=""> <img  src={ViaRealPng} alt="" /></a>
      <a href=""><h3>Via Real</h3></a>

     </article>

     <article className='case-viareal'>
     <a href=""> <img  src={IsmaelJpg} alt="" /></a>
      <a href=""><h3>Ismael Decor</h3></a>

     </article>

     <article className='case-viareal'>
      <a href=""><img  src={fpartPng} alt="" /></a>
      <a href=""><h3>Fp Art</h3></a>

     </article>

    </SectionCase>

    </ContainerCases>
  )
}

export default Cases