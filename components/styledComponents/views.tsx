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

const HomeHeader = styled.header``;

const NavContainer = styled.div`
	background-color: ${(props) => props.theme.navContainerColor};
`;

const CercleContainer = styled.div``;

const CercleOne = styled.div`
	border: 1px solid ${(props) => props.theme.cerecleBorder};
	width: 18.75rem;
	height: 18.75rem;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const CercleTow = styled.div`
	border: 1px solid ${(props) => props.theme.cerecleBorder};
	width: 9.375rem;
	height: 9.375rem;
	border-radius: 50%;
	background: ${(props) => props.theme.cercleBackground};
	background: ${(props) => props.theme.cercleGradient};
`;

const Nav = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 0;
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

@keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}



export {
	HomeGridContainer,
	HomeHeader,
	HomeContainer,
	NavContainer,
	CercleContainer,
	CercleOne,
	FooterContainer,
	CercleTow,
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
};
