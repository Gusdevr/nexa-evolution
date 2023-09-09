import styled from "styled-components"
import { colors } from '../../styles/theme'


export const ContainerSlide = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 80px;
    margin-bottom: 200px;
  

    .article-site {
        
        img {
            width: 400px;
            height: 350px;
        }

        h3 {
            margin-bottom: 20px;
            display: flex;
            justify-content: center;
        }

        p {
            display: flex;
            justify-content: center;
            max-width: 350px;
            line-height: 150%;
            text-align: center;
            margin-left: 20px;
            height: 100px;

        }

        button {
            margin-top: 100px;
            display: flex;
            justify-content: center;
            margin-left: 136px;
            width: 120px;
            height: 40px;
            text-align: center;
            align-items: center;
            border-radius: 8px;
            border: none;
            cursor: pointer;
            background-color: ${colors.danger};
            color: ${colors.light};
            font-weight: 700;
            font-size: 18px;
            transition: transform 1.3s ease, background-color 0.3s ease;

            :hover {
    transform: scale(1.1);
}
        }

        a {
            text-decoration: none;
        }

      
    }
`