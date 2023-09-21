import styled from "styled-components"

export const ContainerCases = styled.div`
    display: flex;
    justify-content: space-around;

    .content-footer {
        position: absolute;
        justify-content: center;
        display: flex;
        margin-top: 80%;
        
    }


    .content-case {

        display: flex;
        justify-content: space-around;
        margin-left: 200px;
        margin-top: 200px;

        img {

        width: 500px;
        border-radius: 10px;
        
    }

    .title-case {
        margin-right: 400px;

      

        p {
        display: flex;
        margin-top: 50px;
        max-width: 500px;
        margin-left: 100px;
        line-height: 150%;
        font-size: 18px;
    }

    h1 {
        display: flex;
        margin-left: 100px;
        
    }

    }



    }

   
`

export const SectionCase = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    width: 100vw;
    background-color: #000000f5;
    height: 500px;
    align-items: center;
    gap: 100px;
    margin-top: 1000px;

    h2 {
        display: flex;
        font-size: 27px;
        justify-content: center;
        font-weight: 700;
        line-height: 150%;
        margin-bottom: 50px;
       
        

    }

    a {
        text-decoration: none;
        color: #fff;
        display: flex;
        margin-top: 15px;
        font-weight: 700;
    }

    img {
        display: flex;
        align-items: center;
        transition: transform 0.3s ease;
        width: 300px;
        height: 300px;
        border-radius: 10px;


        :hover {
        transform: scale(1.10);
      }
    }

 
    .title-case {
        color: black;
        position: absolute;
        display: flex;
        justify-content: center;
        text-align: center;
        margin-bottom: 650px;

      
    }
    
`