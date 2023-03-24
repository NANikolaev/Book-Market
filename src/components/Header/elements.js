import styled from "styled-components";
import { BigHeading, Input, Button,Form } from '../common';

export const StyledHeader = styled.header`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 3%;
  row-gap: 20px;
  column-gap: 10px;
  z-index: 2;
  @media screen and (min-width:810px){
   form{
    order: unset;
    width: 33%;
   }
 }
`
export const StyledImage = styled.img`
width: ${(props) => props.width || null};
`
export const StyledLogo = styled(BigHeading)`
 font-family: ${({ theme }) => theme.fonts.blackOps}, cursive;
 width: 160px;
`
export const StyledForm = styled(Form)`
gap: 15px;
width: 100%;
justify-content: center;
order: 1;
max-width: 600px;
`
export const StyledInput = styled(Input)`
width:80% ;
padding: 0 15px;
`
export const StyledSearchButton = styled(Button)`
text-align: center;
min-width: 35px;
`

