import styled, { keyframes } from "styled-components";
import { ArticleContainer} from "../common/index";

const scroll = keyframes`
0% { {transform: translateX(0)}}
100% {{ transform: translateX(calc(10 * -130px))}}
`

export const StyledArticle = styled(ArticleContainer)`
display: none;
margin: 0 auto;
overflow:hidden;
width: 90%;
height: 100%;
border-radius: 5px;
position: relative;
box-shadow: ${({theme})=>theme.shadows.prime};
&::before,
	&::after {
		position: absolute;
		background: linear-gradient(270deg,transparent,black);
		content: "";
		height: 100%;
		width: 120px;
		z-index: 2;
	}
	
	&::after {
		right: 0;
		top: 0;
		transform: rotateZ(180deg);
	}

	&::before {
		left: 0;
		top: 0;
	};

	@media screen and (min-width:768px){
		display: block;
	}

`

export const StyledList = styled.ul`
display: flex;
flex-wrap: nowrap;
position: relative;
gap: 10px;
width: calc(130px * 20);
animation: ${scroll} 40s linear infinite;
&:hover{
   animation-play-state: paused;
}
`
export const StyledItem = styled.li`
  
`
export const StyledImage = styled.img`
 object-fit: cover;
 width: 120px;
 height: 190px;
 border-radius: 5px;
 box-shadow: ${({theme})=>theme.shadows.prime};
`