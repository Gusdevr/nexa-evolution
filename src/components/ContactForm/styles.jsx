import styled from "styled-components"

export const ContentForm = styled.div`
 
     
     form {
        position: absolute;
        background: linear-gradient(to right, #fff 70%,  #85031f 30%);
        width: 800px;
        height: 630px;
        border-radius: 5px;
        display: flex;
        gap: 10px;
        margin-top: 200px;
        margin-left: 300px;
       

        .info-content {
            display: flex;
            position: absolute;
            justify-content: space-around;
            margin-left: 530px;
            margin-bottom: 500px;
            color: #fff;

           
          
        }

       
    
        input {
            width: 450px;
            height: 30px;
            
           
        }

        textarea {
            width: 450px;
            height: 250px;

          
           
            
        }

        .input-area {
            display: flex;
            margin-top: 70px;
            flex-direction: column;
            margin-left: 50px;
            gap: 10px;

        
            
            .btn-subm{
                background-color: #85031f;
                color: #fff;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                height: 40px;
                font-size: 16px;
                font-weight: 700;
                
            }
           
        }

        label {
          
        }

        button {
        
            margin-right: 595px;
        }

        h3 {
            display: flex;
           color: #85031f ;
           text-transform: uppercase;
           font-size: 25px;
           font-weight: 700;

        }

      
        
  
     }

   



    
`