import styled, { keyframes } from "styled-components";

const HomeGridContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(3, 1fr);
	grid-column-gap: 0;
	grid-row-gap: 0;
`;

const HomeContainer = styled.div`
	margin: 0 18.75rem;
`;

const NavContainer = styled.header`
	background-color: ${(props) => props.theme.navContainerColor};
`;

const CircleContainer = styled.div``;

const CircleOne = styled.div`
	border: 1px solid ${(props) => props.theme.cerecleBorder};
	width: 18.75rem;
	height: 18.75rem;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const CircleTow = styled.div`
	border: 1px solid ${(props) => props.theme.cerecleBorder};
	width: 9.375rem;
	height: 9.375rem;
	border-radius: 50%;
	background: ${(props) => props.theme.CircleBackground};
	background: ${(props) => props.theme.CircleGradient};
`;

// @ts-ignore
const circle = keyframes`
	0%{
	    transform:rotate(0deg)
	              translate(-165px)
	              rotate(0deg);
	  
	  }
	  100%{
	    transform:rotate(360deg)
	              translate(-165px)
	              rotate(-360deg);
	  }

`;

// TODO : fix Circle position
// TODO: add Circle Theme color

const Circle = styled.div`
	width: 20px;
	height: 20px;
	background: cyan;
	border-radius: 50%;
	position: absolute;
	overflow: hidden;
	margin: auto;
	animation: ${circle} 6s linear infinite;
`;

const LogoBar = styled.hr`
	margin-left: 1rem;
	position: absolute;
	top: -1rem;
	left: 0.625rem;
	width: 3rem;
	border: 2px solid ${(props) => props.theme.companyBarColor};
	border-radius: 3px;
`;

const Nav = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 0;
	padding-top: 1rem;
`;

const SearchForm = styled.div`
	display: flex;
	flex-flow: row nowrap;
`;

const SearchInput = styled.input`
	border: 1px solid ${(props) => props.theme.searchInputBorderColor};
	border-radius: 1.25rem;
	padding: 0.557rem;
	background-color: ${(props) => props.theme.searchInputBackground};
	&:focus {
		outline-color: ${(props) => props.theme.searchInputBorderColorHover};
	}
`;

const SearchButton = styled.span`
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	right: 1.813rem;
`;

const SearchSVG = styled.svg`
	height: 15px;
	width: 15px;
	fill: ${(props) => props.theme.searchSVGColor};
`;

const NavLinkButton = styled.button`
	background-color: transparent;
	border: none;
`;

const NavLinkSVG = styled.svg`
	fill: ${(props) => props.theme.navLinkSVGColor};
`;

export {
	HomeGridContainer,
	HomeContainer,
	NavContainer,
	CircleContainer,
	CircleOne,
	CircleTow,
	Circle,
	Nav,
	LogoBar,
	SearchForm,
	SearchInput,
	SearchButton,
	SearchSVG,
	NavLinkButton,
	NavLinkSVG,
};
