import React,{ useState } from "react";
import { ContainerHeader } from "./styles";
import LogoNexaPng from "../../assets/img/logo2.png";
import { CgMenuHotdog } from "react-icons/cg";



const Header = () => {

  const [isMenuHotdogOpen, setIsMenuHotdogOpen] = useState(false)

const toggleMenuHotDog = () => {
  setIsMenuHotdogOpen(!isMenuHotdogOpen)
  setIsAnyDropdownOpen(false)
  closeAllDropdowns()
}
  return (
    <ContainerHeader>
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
           <a href="#"></a><li>Fale com a Nexa</li>
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
           <a href="#"></a><li>Fale com a Nexa</li>
         </ul>
        )}
          </div>
      
       
    
    </ContainerHeader>
  );
};

export default Header;
