import React from 'react'
import { ContainerContact } from './styles'
import Header from '../../components/Header'
import ContactForm from '../../components/ContactForm'
import FormBannerPng  from '../../assets/img/bannercontacta.jpg'
import Footer from '../../components/Footer'
import WhatsAppButton from '../../components/Whatsap'

const Contact = () => {
  return (
    <ContainerContact>

<div content-header>
            <Header />

        </div>

        <WhatsAppButton />

   

        <ContactForm />

        <img src={ FormBannerPng  }></img>

        <Footer />
     
    </ContainerContact>
  )
}

export default Contact