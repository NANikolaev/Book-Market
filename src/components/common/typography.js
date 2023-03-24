 import styled from "styled-components";

 export const BigHeading=styled.h1`
  text-align: center;
  font-size: 1.8rem;
  color: ${({theme})=>theme.colors.prime};
 `
 export const Heading=styled.h2`
  text-align: center;
  font-weight: 700;
  font-size: 1.5rem;
  color: ${({theme})=>theme.colors.prime};
 `
 export const InnerHeading=styled.h3`
 font-size: 0.8rem;
 color: ${({theme})=>theme.colors.prime};
 `
 export const SmallHeading=styled.h4`
 font-size: 0.7rem;
 font-weight: 600;
 color: ${({theme})=>theme.colors.secondary};
 `
 export const TinyHeading=styled.h5`
 color: ${({theme})=>theme.colors.tertiary};
 text-align: center;
 font-size: 1.2rem;
 text-shadow: ${({theme})=>theme.shadows.text};
 `

 export const Paragraph=styled.p`
 color: ${({theme})=>theme.colors.secondary};
 `
 export const Label=styled.label`
 color: ${({theme})=>theme.colors.prime};
 font-weight: 600;
 `