import React, { useState } from 'react'
import axios from 'axios'
import { ContentForm } from './styles'

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://formspree.io/f/xjvqwdzv', formData);

      if (response.status === 200) {
        alert('E-mail enviado com sucesso!')
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        console.error('Erro ao enviar o e-mail')
        alert('Erro ao enviar o e-mail. Tente novamente mais tarde.')
      }
    } catch (error) {
      console.error('Erro ao enviar o e-mail:', error);
      alert('Erro ao enviar o e-mail. Tente novamente mais tarde.')
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value })
  };

  return (
    <ContentForm>
    <form onSubmit={handleSubmit}>
       
        <div className='input-area'>

    
        <h3>fale conosco</h3>
      <label htmlFor="name">Nome</label>
      <input type="text" name="name"  value={formData.name} onChange={handleInputChange} />
      <label htmlFor="email">E-mail</label>
      <input type="email" name="email"  value={formData.email} onChange={handleInputChange} />
      <label htmlFor="message">Mensagem</label>
      <textarea name="message"  value={formData.message} onChange={handleInputChange} />
      <input type="submit" className='btn-subm'/>


      </div>
  

       
    </form>
    </ContentForm>
  );
}

export default ContactForm