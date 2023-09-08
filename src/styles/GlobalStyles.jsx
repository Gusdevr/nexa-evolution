import { createGlobalStyle } from "styled-components"
import { colors } from "./theme"


export const GlobalStyles = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    

}

body {
    -webkit-font-smoothing: antialiased;
    background-color: ${colors.light};

}

body, input , header {
    font-family: 'Roboto', sans-serif;
}
`