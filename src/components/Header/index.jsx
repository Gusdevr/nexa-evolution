import React,{ useState, useEffect } from "react";
import { ContainerHeader } from "./styles";
import LogoNexaPng from "../../assets/img/logo2.png";
import { CgMenuHotdog } from "react-icons/cg";



const Header = () => {

const [isMenuHotdogOpen, setIsMenuHotdogOpen] = useState(false)
const [scrolled, setScrolled] = useState(false)


const toggleMenuHotDog = () => {
  setIsMenuHotdogOpen(!isMenuHotdogOpen)
  setIsAnyDropdownOpen(false)
  closeAllDropdowns()
}

useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  window.addEventListener('scroll', handleScroll)

  return () => {
    window.removeEventListener('scroll', handleScroll)
  }
}, [])


  return (
    <ContainerHeader className={scrolled ? 'scrolled' : ''}>
      <div className="logo-header">
        <a href="/">
          <img src={LogoNexaPng} alt="LogoNexa" />
        </a>
      </div>


      <nav>
      <ul>
           <a href="/"></a><li>Home</li>
           <a href="#"></a><li>Quem Somos</li>
           <a href="#"></a><li>Cases</li>
           <a href="#"></a><li>Serviços</li>
           <a href="#"></a><li>Contato</li>
           <a href="#"></a><li>Converse com a Nexa</li>
         </ul>
         </nav>
        

        <div className="menu-dog">
          <CgMenuHotdog className="icon-dog" size={'40px'} onClick={toggleMenuHotDog} />

      

        {isMenuHotdogOpen &&(
           <ul>
           <a href="/"></a><li>Home</li>
           <a href="#"></a><li>Quem Somos</li>
           <a href="#"></a><li>Cases</li>
           <a href="#"></a><li>Serviços</li>
           <a href="#"></a><li>Contato</li>
           <a href="#"></a><li>Converse com a Nexa</li>
         </ul>
        )}
          </div>
      
       
    
    </ContainerHeader>
  );
};

export default Header;
