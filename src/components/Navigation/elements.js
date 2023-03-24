import styled from "styled-components";
import { DivContainer } from "../common";

export const StyledNav = styled.nav`
 display: flex; 
 align-items: center;
 position: relative;
 & div>ul{
  display: flex;
  flex-direction: column;
  gap: 0px;
  li{
    color: white;
    border-bottom: 1px solid black;
  }
 }
`
export const StyledIcon = styled.img`
width: ${(props) => props.width || null};
padding-top: 8px;
`
export const StyledList = styled.ul`
overflow: hidden;
display: flex;
align-items: center;
gap: 20px;
`
export const StyledItem = styled.li`
  color: ${({ theme }) => theme.colors.prime};
  text-align: center;
  line-height: 2.5;
  cursor: pointer;
`
export const StyledDiv = styled(DivContainer)`
 background:#e1bc90de;
 position: absolute;
 padding: 10px;
 border-radius: 5px;
 bottom: -125px;
 right: -10px;
 display: ${(props) => props.show ? 'block' : 'none'};
 transition: ease-in-out 300ms;
`