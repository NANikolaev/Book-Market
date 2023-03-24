import styled from "styled-components";

export const StyledList = styled.ul`
 display: flex;
 justify-content: center;
 width: 100%;
`
export const StyledItem = styled.li`
display: flex;
align-items: center;
justify-content: center;
width: 30px;
height: 30px;
cursor: pointer;
color: ${({ theme }) => theme.colors.secondary};
text-shadow: -5px 3px 2px rgb(0 0 0 / 60%);

`
export const StyledImage = styled.img`
width: 100%;
`