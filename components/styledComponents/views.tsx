import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

const HomeGridContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(3, 1fr);
	grid-column-gap: 0;
	grid-row-gap: 0;
`;

const HomeContainer = styled.div`
	margin: 0 11.75rem;
`;

const NavContainer = styled.header`
	background-color: ${(props) => props.theme.navContainerColor};
	height: 25rem;
`;

const CircleContainer = styled.div`
	position: relative;
	top: 1.125rem;
	left: 10rem;
	display: inline-block;
`;

const CircleOne = styled.div`
	border: 1px solid ${(props) => props.theme.cerecleBorder};
	width: 15.75rem;
	height: 15.75rem;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const CircleTow = styled.div`
	border: 1px solid ${(props) => props.theme.cerecleBorder};
	width: 7.375rem;
	height: 7.375rem;
	border-radius: 50%;
	background: ${(props) => props.theme.CircleBackground};
	background: ${(props) => props.theme.CircleGradient};
`;

// @ts-ignore
const circle = keyframes`
	0%{
	    transform:rotate(0deg)
	              translate(-126px)
	              rotate(0deg);
	  
	  }
	  100%{
	    transform:rotate(360deg)
	              translate(-126px)
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
const NavLinkContainer = styled(motion.div)`
	position: absolute;
	top: 0;
	left: 78%;
	bottom: 0;
	height: 25rem;
	width: 300px;
`;

const NavLinkButton = styled.button`
	outline: none;
	border: none;
	position: absolute;
	top: 1.813rem;
	left: 2.438rem;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	cursor: pointer;
	border-radius: 50%;
	background: transparent;
`;
const SideBar = styled(motion.div)`
	position: absolute;
	top: 0;
	left: 1.063rem;
	bottom: 0;
	width: 300px;
	background: #fff;
`;

const NavUl = styled(motion.ul)`
	padding: 25px;
	position: absolute;
	top: 4.375rem;
	width: 230px;
	margin: 0;
`;

const NavLi = styled(motion.li)`
	margin: 0 0 20px 0;
	padding: 0;
	list-style: none;
	display: flex;
	visibility: hidden;
	align-items: center;
	cursor: pointer;
`;

const NavIcon = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	flex: 40px 0;
	margin-right: 20px;
`;

const NavLink = styled.div`
	border-radius: 5px;
	width: 200px;
	height: 20px;
	flex: 1;
`;

const GalleryHomeContainer = styled.div`
	margin: 0 11.75rem;
	display: flex;
	align-items: center;
	justify-content: center;
`;
const HeroContainer = styled.div`
	display: flex;
	flex-flow: column;
	justify-content: center;
	position: absolute;
`;

const SocialMediaContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

const InstaContainer = styled.div`
	margin-right: 1rem;
`;
const FacebookContainer = styled.div`
	margin-right: 1rem;
`;
const TwitterContainer = styled.div``;

const InstaSVG = styled.svg``;
const FacebookSVG = styled.svg``;
const TwitterSVG = styled.svg``;

const InstaPath = styled.path`
	fill: ${(props) => props.theme.instaColor};
	fill-opacity: ${(props) => props.theme.instaOpacity};
`;

const FacebookPath = styled.path`
	fill: ${(props) => props.theme.facebookColor};
	fill-opacity: ${(props) => props.theme.facebookOpacity};
`;

const TwitterPath = styled.path`
	fill: ${(props) => props.theme.twitterColor};
	fill-opacity: ${(props) => props.theme.twitterOpacity};
`;

const GalleryContainer = styled.div``;

const ImageGallery = styled(motion.img)`
	max-height: 41rem;
	max-width: 49rem;
`;

const Next = styled.div`
	top: calc(50% - 20px);
	position: absolute;
	background: white;
	border-radius: 30px;
	width: 40px;
	height: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	user-select: none;
	cursor: pointer;
	font-weight: bold;
	font-size: 18px;
	z-index: 2;
	right: 10px;
`;

const Prev = styled.div`
	top: calc(50% - 20px);
	position: absolute;
	background: white;
	border-radius: 30px;
	width: 40px;
	height: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	user-select: none;
	cursor: pointer;
	font-weight: bold;
	font-size: 18px;
	z-index: 2;
	left: 10px;
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
	NavLinkContainer,
	NavLinkButton,
	SideBar,
	NavUl,
	NavLi,
	NavIcon,
	NavLink,
	GalleryHomeContainer,
	HeroContainer,
	SocialMediaContainer,
	InstaContainer,
	InstaSVG,
	InstaPath,
	FacebookContainer,
	FacebookSVG,
	FacebookPath,
	TwitterContainer,
	TwitterSVG,
	TwitterPath,
	GalleryContainer,
	ImageGallery,
	Next,
	Prev,
};
