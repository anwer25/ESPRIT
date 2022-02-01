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
const Section = styled.section`
	background-color: #f0f8ff;
	position: relative;
	text-align: center;
`;

const FooterContainer = styled.footer`
	background-color: #0041c2;
	color: white;
`;
const ListContainer = styled.ul`
	display: inline-flex;
	margin: 25px;
	padding: 20px;
`;
const FooterC = styled.div`
	background-color: #13294b;
	text-align: center;
	padding: 15px;
	color: grey;
`;
const FooterColor = styled.li`
	color: #00bfff;
	list-style-type: none;
	margin: 15px;
	padding: 10px;
`;
const DisplayContainer = styled.li`
	display: block;
	text-align: left;
	flex-right: 5rm;
	flex: 1;
	list-style-type: none;
	margin: 2rm;
	padding: 2rm;
	width: 540x;
`;
const FormContainer = styled.form`
	text-shadow: 2px 2px 5px #00bfff;
	color: #00bfff;
	font-weight: bold;
	font-size: 60px;
	position: relative;
	font-family: Comic;
	text-align: center;
	padding: 0;
	margin: 0px;
	top: 90px;
	right: 20px;
`;
const SearchForm = styled.div`
	display: flex;
	flex-flow: row nowrap;
`;

const InputContainer = styled.input`
	placeholder: Email;
	border-bottom: 1px solid blue;
	border-color: blue;
	margin: 10px;
	padding: 2rm;
	position: relative;
	height: 40px;
	width: 250px;
`;
const ButtonContainer = styled.button`
	display: inline-block;
	padding: 15px 25px;
	font-size: 20px;
	cursor: pointer;
	text-align: center;
	outline: none;
	color: white;
	background-color: #0000ff;
	border: none;
	border-radius: 15px;
	box-shadow: 0 9px #999;
	width: 250px;
	height: 50px;
`;
const ImageContainer = styled.image`
	float: left;
	width: 550px;
	height: 550px;
	position: relative;
	left: 165px;
	bottom: 139px;
`;
const PositionContainer = styled.div`
	position: relative;
	right: 280px;
	top: 70px;
`;
const ColorH1Blue = styled.h4`
	color: blue;
	margin: 0px;
	padding: 0px;
	font-weight: normal;
	font-family: Comic;
`;
const BrComponent = styled.br``;
const SearchInput = styled.input`
	border: 1px solid ${(props) => props.theme.searchInputBorderColor};
	border-radius: 1.25rem;
	padding: 0.557rem;
	background-color: ${(props) => props.theme.searchInputBackground};
	&:focus {
		outline-color: ${(props) => props.theme.searchInputBorderColorHover};
	}
`;

const Gallery = styled.ul`
	margin: 20px 0 20px 24px;
	padding: 0;
	width: 400px;
`;

const AnimationScale = keyframes`
	0%{
		transform:scale(1);
	}
	100%{
		transform:scale(1.2);
}
`;

const Galleryli = styled.li`
	display: inline-block;
	list-style: none;
	float: left;
	width: 400px;
	overflow: hidden;
	animation: ${AnimationScale} 1s;
`;
const SlideShowContainer=styled.div`
max-width:1000px ;
position :relative;
margin :auto ;`
;
const NextPrevButton = styled.div`
	cursor: pointer;
	position: absolute;
	top: 50%;
	width: auto;
	padding: 16px;
	margin-top: -22px;
	color: white;
	font-weight: bold;
	font-size: 18px;
	transition: 0.6s ease;
	border-radius: 0 3px 3px 0;
	user-select: none;
`;
const PosNext = styled.div`
	right: 0;
	border-radius: 3px 0 0 3px;
`;
const DotContainer = styled.div`
	cursor: pointer;
	height: 15px;
	width: 15px;
	margin: 0 2px;
	background-color: #bbb;
	border-radius: 50%;
	display: inline-block;
	transition: background-color 0.6s ease;
`;
const AnimationFade = styled.div`
	-webkit-animation-name: fade;
	-webkit-animation-duration: 1.5s;
	animation-name: fade;
	animation-duration: 1.5s;
`;
@-webkit-keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
};
const SearchButton = styled.span`
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	right: 1.813rem;
`;

@keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}



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

const MainContainer = styled.main`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(7, 1fr);
	grid-column-gap: 0;
	grid-row-gap: 0;
`;

const CoursesSection = styled.section`
	margin-top: 2rem;
`;

export {
	HomeGridContainer,
	HomeContainer,
	NavContainer,
	CercleContainer,
	CercleOne,
	FooterContainer,
	CercleTow,
	CircleContainer,
	CircleOne,
	CircleTow,
	Circle,
	Nav,
	ListContainer,
	FooterC,
	FooterColor,
	DisplayContainer,
	Section,
	FormContainer,
	InputContainer,
	ButtonContainer,
	ImageContainer,
	PositionContainer,
	ColorH1Blue,
	BrComponent,
	Gallery,
	Galleryli,
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
	MainContainer,
	CoursesSection,
};
