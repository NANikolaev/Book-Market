import styled,{keyframes} from 'styled-components';

import { DivContainer } from '../common';

const spinner=keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const StyledDiv=styled(DivContainer)`
display: ${({show})=>show? "block" : "none"};
position: fixed;
width: 100vw;
height: 100vh;
left: 0;
top: 0;
`

export const StyledSpinner=styled(DivContainer)`
  position: absolute;
  left: 48.3%;
  top: 50%;
  transform: translate(-48.3%);
  width: 50px;
  height: 50px;
  border:5px solid ${({theme})=>theme.colors.tertiary};
  border-top: 5px solid ${({theme})=>theme.colors.secondary};
  border-bottom: 5px solid ${({theme})=>theme.colors.secondary};
  border-radius: 50%;
  animation: ${spinner} 2s linear infinite;

`