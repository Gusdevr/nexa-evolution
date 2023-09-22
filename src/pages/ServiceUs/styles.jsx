import styled from "styled-components"

export const ContainerServices = styled.div`
    display: flex;



    @media screen and (max-width: 768px){
        flex-direction: column;
    }


    .content-footer {

        @media screen and (max-width: 1280px){
      
          margin-top: 1350px;
        
     
    }


        @media screen and (max-width: 768px){
        flex-direction: column;
        margin-top: 2400px;
    }

        position: absolute;
        justify-content: center;
        display: flex;
        margin-top: 70%;
    
    }

    .content-service {

        @media screen and (max-width: 1280px){
      
          img {
            position: absolute;
            flex-direction: column;
            right: 125px;
            width: 150px;
            top: 85%;
          }
        
     
    }



        @media screen and (max-width: 768px){
        flex-direction: column;

            

        .title-service {
            position: absolute;
            right: 10%;
            width: 300px;
            top: 10%;
        }

        
    }

        img {
            display: flex;
           
            margin-top: 150px;
          margin-left: 1050px;
           
        
        }

        p {
            margin-left: 100px;
        }

        h1 {
            margin-left: 100px;
        }

        .title-service {

            @media screen and (max-width: 1280px){
      
         
          margin-left: 90px;
          width: 400px;
          
        
     
    }

            @media screen and (max-width: 768px){
        flex-direction: column;
        
    }

            display: flex;
            position: absolute;
            margin-top: 200px;
            max-width:600px;
            line-height: 150%;
            margin-left: 350px;

            p {
                margin-top: 50px;
                font-size: 18px;
            }
          
            h1 {
                display: flex;
                position: absolute;
            }
            
        }
    }

  
`


export const SectionIcon = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    width: 100vw;
    align-items: center;
    margin-top: 1000px;
    gap: 200px;

    @media screen and (max-width: 1280px){
      
          
        img {
            width: 150px;
        }

        p {
            max-width: 150px;
        }
     
    }
  

    @media screen and (max-width: 768px){
        flex-direction: column;
    }

  
    p {
       
        position: absolute;
        line-height: 150%;
        margin-top: 10px;
        
    }

    

    img {
       
        display: flex;
      
      
      
      
     
        
    }

 

  
        
`