import styled from "styled-components"

export const ContainerHeader = styled.header`
    position: fixed;
    /* background-color: #fff; */
    backdrop-filter: blur(10px);
    width: 100vw;
    height: 7rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    z-index: 1000;
    transition: background-color 1.3s ease;

  
    

    @media screen and (max-width: 768px) {
        flex-direction: column;
        width: 100vw;

     

        nav  {
            display: none;
        }
      

     
        
    }


    .menu-dog {
        display: none;

        @media screen and (max-width: 768px) {
        flex-direction: column;
        display: block;
        position: absolute;
        left: 50px;
     
        
    }
    }

    .logo-header img {
       max-width: 150px;
        display: flex;
        height: auto;

        @media screen and (max-width: 768px) {
        flex-direction: column;
        width: 100vw;
      
        
    }
    }
    

    nav ul {
        list-style: none;
        display: flex;
        justify-content: space-around;
        gap: 40px;


       
    }

    nav ul li {
        display: flex;
        cursor: pointer;
        font-size: 18px;
        font-weight: 500;


        :hover{
            color: #f8f8f8;
            font-weight: 700;
        }

    }
`