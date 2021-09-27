import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --background: #282828;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
}
`;
