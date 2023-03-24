import styled from "styled-components";

export const Input = styled.input`
line-height: 2.5;
font-weight: 700;
border-radius: 20px;
border: none;
outline: none;
box-shadow: ${({theme})=>theme.shadows.prime};
`
export const SubmitInput=styled(Input)`
 width: 100px;
 align-self: center;
 color: ${({theme})=>theme.colors.prime};
 cursor: pointer;
 font-size: 16px;
 font-weight: 700;
 margin-top: 10px;
 transition: ease-in-out 300ms;
 &:hover{
    color: ${({theme})=>theme.colors.tertiary};
    background: ${({theme})=>theme.colors.secondary};
 }
`