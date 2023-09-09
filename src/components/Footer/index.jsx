import React from 'react'
import { ContainerFooter } from './styles'
import LogoNexaPng from  '../../assets/img/logo2.png'
import { FaRegEnvelope } from "react-icons/fa"
import { FaWhatsappSquare } from "react-icons/fa"
import { FaFacebookSquare } from "react-icons/fa"
import { FaInstagramSquare } from "react-icons/fa"


const Footer = () => {
  return (
   <ContainerFooter>

    <img src={LogoNexaPng} alt="" />

    {/* <div className='insti-footer'>
        <a href="">Quem Somos</a>
        <a href="">Cases</a>
        <a href="">Serviços</a>
        <a href="">Contato</a>

    </div> */}

    <div contact-footer>
   <h3>Fale com a Gente</h3>
     <p><FaRegEnvelope size={'20px'} /> contato@nexaevolution.com.br</p>
     <p><FaRegEnvelope size={'20px'} /> comercial@nexaevolution.com.br</p>
    <a href=""><FaWhatsappSquare style={{marginTop: '10px'}} size={'25px'} /></a>
    <a href=""><FaFacebookSquare size={'25px'} /></a>
    <a href=""><FaInstagramSquare size={'25px'} /></a>


    </div>

    <div className='copy-nexa'>

    Nexa Evolution 2023 &copy; <strong> Todos os Direitos Reservados</strong>
    </div>


   </ContainerFooter>
  )
}

export default Footer