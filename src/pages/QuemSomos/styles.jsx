import styled from "styled-components"

export const ContentUs = styled.div`
    display: flex;

    .content-footer {
        position: absolute;
        justify-content: center;
        display: flex;
        margin-top: 90%;

        @media screen and (max-width: 768px){
           
            
        }

        @media screen and (max-width: 1280px){
        display: flex;
        margin-top: 135%;
       
        
    }

    @media screen and (max-width: 1500px){
        display: flex;
        margin-top: 135%;
       
        
    }
        
    }

    @media screen and (max-width: 768px){
        display: flex;
        flex-direction: column;
        max-width: 400px;
       
        
    }

    @media screen and (max-width: 1280px){
        display: flex;
       
       
        
    }
   
`

export const SectionUs = styled.div`
    display: flex;
    margin-top: 200px;
    margin-left: 50px;


   
    @media screen and (max-width: 768px){
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        width: 400px;
        margin-top: 150px;
        width: 100%;

        p {
           margin-right: 40px;
           text-align: justify;
     
          
        }

        h1 {
            flex-direction: column;
            position: absolute;
            right: 50%;
            top: 85%;
        }
    
       
    }



    img {
        display: flex;
        height: 600px;
        border-radius: 10px;
  
    }
    
    p {
        display: flex;
        max-width: 450px;
        line-height: 160%;
        margin-top: 80px;
        font-size: 20px;
        font-weight: 500;
        margin-left: 100px;
      
        
    }

    h1 {
    
        display: flex;
        color: #db3939;
        font-weight: 700;
        position: absolute;
        margin-left: 700px;

   
        
       
    }


 
    
`

export const ContentService = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    width: 100vw;
    background-color: #000000f5;
    height: 500px;
    align-items: center;
    gap: 15px;
    margin-top: 1200px;

    @media screen and (max-width: 1280px){
        display: flex;
        
        
        article img {
            width: 250px;
        }

        
    }

    @media screen and (max-width: 768px){
        margin-top: 1850px;
        flex-direction: column;
        background-color: transparent;

       
     
        .title-service h2{
         color: black;
         margin-bottom: 730px;
        }
    

        article h3{
        
          color: black;
            
        }
    }

    img {
        display: flex;
        align-items: center;
        width: 300px;
        transition: transform 0.3s ease;

        :hover {
        transform: scale(1.10);
      }
    }

    .title-service {
        color: #fff;
        position: absolute;
        display: flex;
        justify-content: center;
        text-align: center;
        margin-bottom: 350px;

        
    }

    a {
        text-decoration: none;
        
    }

    h3 {
      justify-content: center;
      display: flex;
      margin-top: 10px;
      color: #fff;
      font-size: 20px;
      cursor: pointer;

      :hover {
        color: #db3939;
      }

    }

    
`

