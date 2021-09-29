import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --background: #282828;
    --shape:#1E1E1E;

    
    --text-body:#969CB2;
    --text-title:#FFFFFF;

    --red:#E52E4D;
    --dark-700:#2C2C2C;
    --dark-500:#3F3A3A;
    --green:#3F5744;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

//font-size: 16px Desktop
html{
    @media(max-width: 1080px) {
        font-size: 93.75%; //15px
    }

    @media(max-width: 720px) {
        font-size: 87.5%; //14px
    }
}

body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
}

body, input,textarea,button{
  font-family:'Raleway', sans-serif;  
  font-weight: 400;

}

h1, h2, h3, h4, h5,h6,strong{
    font-weight: 600;
}

button{
    cursor: pointer;
}

[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
}
`;
