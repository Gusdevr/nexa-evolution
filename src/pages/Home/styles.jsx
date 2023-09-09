import styled from "styled-components";
import { colors } from "../../styles/theme";

export const ContainerHome = styled.div`
    display: flex;
    flex-direction: column;

    h2 {
        display: flex;
        justify-content: center;
        margin-bottom: 50px;
        font-size: 32px;
        
    }
   

    .title-banner {
        display: flex;
        justify-content: space-around;
        max-width: 400px;
        flex-direction: column;
        position: absolute;
        bottom: 60%;
        margin-left: 100px;
        color: ${colors.light};
        text-shadow: 3px 4px black;
      

        h1 {
            font-weight: 700;
            margin-bottom: 15px;
            font-size: 44px;
        }

        /* p {
            line-height: 150%;
            font-size: 20px;
        } */

        button {
            margin-top: 15px;
            width: 160px;
            height: 60px;
            background-color: ${colors.danger};
            border: none;
            border-radius: 8px;
            color: ${colors.light};
            font-weight: 700;
            font-size: 18px;
            cursor: pointer;

            :hover {
                background-color: #fff;
                color: black;
                font-weight: 700;
            }
        }
    }



     @media screen and (max-width: 768px) {
        flex-direction: column;
        width: 100vw;
        
    }
`

export const ContentBanner = styled.div`

 img {
    width: 100vw;
    height: 1000px;
   
    
 }

 @media screen and (max-width: 768px) {
    img {
        flex-direction: column;
        width: 100vw;
        height: 400px;
    }
        
        
    }
 
`

export const SectionService = styled.section`



h2 {
    margin-top: 100px;
    display: flex;
    justify-content: center;
    font-size: 32px;
}
    
`


export const SectionCase = styled.section`
    
    display: flex;
    justify-content: center;
    background-color: #000000f5;
    height: 500px;
    align-items: center;
    gap: 100px;
   
   


    img {
        width: 300px;
        height: 300px;
        margin-bottom: 10px;
        cursor: pointer;
        border-radius: 5px;
        transition: transform 0.3s ease;

        :hover {
        transform: scale(1.05);
      }
      
    }

    a {
        text-decoration: none;
        color: #fff;

        :hover {
            color: #db3939;
        }
       
    }

    @media screen and (max-width: 768px){
        display: flex;
        flex-direction: column;
        height: 1300px;
       
        
    }

 
  
    
   
    
`




