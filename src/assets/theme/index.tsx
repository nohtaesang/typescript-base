import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Roboto';
        src: url(${require('@/assets/fonts/Roboto-Regular.ttf')});
    }
    body{
        font-family:'Roboto';
    }
`;
