import { createGlobalStyle } from 'styled-components';
import fonts from './fonts.module.css';

export const GlobalStyles = createGlobalStyle`
${fonts}

*,
*::before,
*::after {
  box-sizing: border-box;
}
* {
  margin: 0;
  padding: 0;
  font-family: ${({ theme }) => theme.fonts.poppins},sans-serif;
  font-weight: 500;
}

html,
body {
  scroll-behavior: smooth;
  background-color: ${({ theme }) => theme.colors.background};
}
body {
  line-height: 1.2;
  -webkit-font-smoothing: antialiased;
}

#root{
  position: relative;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2%;
}
main{
overflow: hidden;
 width: 100%;
 padding-top:5% ;
 padding-bottom: 8%;
 border-radius: 5px;
}
main *::-webkit-scrollbar {
  width: 8px;
  background-color: transparent;
  box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  border-radius: 5px;
 }
main *::-webkit-scrollbar-thumb {
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 5px;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
ul{
  list-style: none;
}
a {
  color: inherit;
  text-decoration: none;
}

`