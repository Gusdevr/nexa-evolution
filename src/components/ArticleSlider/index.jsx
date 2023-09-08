import React, { useState } from 'react'
import { ContainerSlide } from './styles'

function ArticleSlide() {
  const [currentArticle, setCurrentArticle] = useState(0);
  
  const articles = [
    {
      imageSrc: 'imagem-1.jpg',
      title: 'Artigo 1',
      description: 'Descrição do Artigo 1...',
      buttonLabel: 'Leia Mais',
    },
    {
      imageSrc: 'imagem-2.jpg',
      title: 'Artigo 2',
      description: 'Descrição do Artigo 2...',
      buttonLabel: 'Leia Mais',
    },
    {
      imageSrc: 'imagem-3.jpg',
      title: 'Artigo 3',
      description: 'Descrição do Artigo 3...',
      buttonLabel: 'Leia Mais',
    },
  ];

  const prevArticle = () => {
    setCurrentArticle((prev) => (prev === 0 ? articles.length - 1 : prev - 1));
  };

  const nextArticle = () => {
    setCurrentArticle((prev) => (prev === articles.length - 1 ? 0 : prev + 1));
  };

  return (
    <ContainerSlide>
      <article className="article-site">
        <img src={articles[currentArticle].imageSrc} alt={articles[currentArticle].title} />
        <h3>{articles[currentArticle].title}</h3>
        <p>{articles[currentArticle].description}</p>
        <button>{articles[currentArticle].buttonLabel}</button>
      </article>
      <button onClick={prevArticle}>Anterior</button>
      <button onClick={nextArticle}>Próximo</button>
    </ContainerSlide>
  );
}

export default ArticleSlide;
