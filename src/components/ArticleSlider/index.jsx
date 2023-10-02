import React, { useState } from "react"
import { ContainerSlide } from "./styles"
import IconLandingPng from "../../assets/img/iconlanding.png"
import IconMarketingPng from "../../assets/img/iconmarketing.png"
import IconSitePng from "../../assets/img/iconsite.png"
import IconMobilePng from "../../assets/img/iconmobile.png"
import IconTraficPng from "../../assets/img/icontrafic.png"
import IconBusinessPng from "../../assets/img/iconbusiness.png"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"

function ArticleSlide() {
  const [currentArticle, setCurrentArticle] = useState(0)

  const articles = [
    {
      imageSrc: IconLandingPng,
      title: "Landing Pages",
      description: `Torne seu negócio mais visível 
        e atraente online com as Landing Pages de alto 
        impacto que criamos. Nossas Landing Pages são projetadas 
        para converter visitantes em clientes.`,
      buttonLabel: "Saiba Mais",
    },
    {
      imageSrc: IconMarketingPng,
      title: "Marketing Digital",
      description: `Potencialize sua presença online com nossa expertise 
      em Marketing Digital. Nossa abordagem estratégica combina análise 
      de mercado, publicidade direcionada e otimização de conteúdo 
      para impulsionar sua marca na internet. `,
      buttonLabel: "Saiba Mais",
    },
    {
      imageSrc: IconSitePng,
      title: "Sites Exclusivos",
      description: `Destaque-se na web com os nossos Sites Exclusivos. 
      Cada site que criamos é projetado para refletir 
      a identidade e os valores da sua marca. Com um design elegante 
      e funcionalidade impecável, nossos sites oferecem uma experiência 
      excepcional aos visitantes. `,
      buttonLabel: "Saiba Mais",
    },
    {
      imageSrc: IconMobilePng,
      title: "App Mobile",
      description: `Transforme sua visão em realidade com um App Mobile 
      personalizado. Desenvolvemos aplicativos móveis intuitivos 
      e inovadores que elevam a experiência do usuário a um novo 
      patamar.`,
      buttonLabel: "Saiba Mais",
    },
    {
      imageSrc: IconTraficPng,
      title: "Tráfego Pago",
      description: `Maximize o potencial do seu marketing online com 
      nossa Gestão de Tráfego Pago. Nossa equipe de especialistas 
      em publicidade digital usa estratégias avançadas para impulsionar 
      seu site e campanhas, direcionando tráfego de qualidade e 
      convertendo visitantes em clientes.`,
      buttonLabel: "Saiba Mais",
    },
    {
      imageSrc: IconBusinessPng,
      title: "Consutoria Empresarial",
      description: `Obtenha insights estratégicos e orientação 
      especializada com a nossa Consultoria Empresarial. 
      Nossa equipe de consultores experientes está pronta para 
      ajudá-lo a enfrentar desafios complexos, identificar oportunidades 
      de crescimento e aprimorar a eficiência operacional.`,
      buttonLabel: "Saiba Mais",
    },
  ]

  const prevArticle = () => {
    setCurrentArticle((prev) => (prev === 0 ? articles.length - 1 : prev - 1))
  }

  const nextArticle = () => {
    setCurrentArticle((prev) => (prev === articles.length - 1 ? 0 : prev + 1))
  }

  
  

  return (
    <ContainerSlide>
      <FaAngleLeft
        className="left-arrow"
        size={"30px"}
        style={{  marginTop: "360px", cursor: "pointer" }}
        onClick={prevArticle}
      >
        Anterior
      </FaAngleLeft>

      <article className="article-site">
        <img
          onClick={nextArticle}
          src={articles[currentArticle].imageSrc}
          alt={articles[currentArticle].title}
        />
        <h3>{articles[currentArticle].title}</h3>
        <p>{articles[currentArticle].description}</p>
        <a href="https://api.whatsapp.com/send?phone=3194752630&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20servi%C3%A7os">
          <button>{articles[currentArticle].buttonLabel}</button>
        </a>

      </article>

      <FaAngleRight
        className="right-arrow"
        size={"30px"}
        style={{ marginTop: "360px", cursor: "pointer" }}
        onClick={nextArticle}
      >
        Próximo
      </FaAngleRight>
      
    </ContainerSlide>
    
  );
}

export default ArticleSlide
