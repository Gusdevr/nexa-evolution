import styled from "styled-components"
import AwesomeSlider from 'react-awesome-slider';


export const StyledAwesomeSlider = styled(AwesomeSlider)`
 display: flex;
 height: 500px;




@media screen and (max-width: 768px){
    display: flex;
    flex-direction: column;
  

  
    
}

img {
    width: 500px;
    height: 400px;

    @media screen and (max-width: 768px){
        width: 100vw;
        height: 250px;

       
        
    }
}
  
`