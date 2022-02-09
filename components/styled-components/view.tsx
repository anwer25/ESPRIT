import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";
import Image from "next/image";

const Container = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: auto;
	grid-column-gap: 0;
	grid-row-gap: 0;
`;
const HeaderContainer = styled.header`
	height: 25rem;
	background-color: ${(props) => props.theme.navContainerColor};
`;
const MainContainer = styled.main`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: auto;
	grid-column-gap: 0;
	grid-row-gap: 0;
`;
const MarginContainer = styled.div`
	margin: 0 11.57rem;
`;
const Nav = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 1rem 0 0 0;
	padding-top: 0;
	height: 4.125rem;
`;
const LogoBar = styled.hr`
	position: relative;
	left: 1rem;
	margin: 0 0 0 0.888rem;
	width: 3rem;
	border: 2px solid ${(props) => props.theme.companyBarColor};
`;
const SearchContainer = styled.div`
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
const SearchSpan = styled.span`
	height: 2.188rem;
	width: 2.188rem;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	right: 2.188rem;
`;
const SearchSvg = styled.svg`
	height: 15px;
	width: 15px;
	fill: ${(props) => props.theme.searchSVGColor};
`;
const NavLinkContainer = styled(motion.div)`
	position: absolute;
	top: 0.688rem;
	left: 80%;
	bottom: 0;
	height: 24.3rem;
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
const SideBar = styled(motion.aside)`
	position: absolute;
	top: 0;
	left: 1.063rem;
	bottom: 0;
	width: 300px;
	background: #fff;
`;
const NavUl = styled(motion.ul)`
	margin: 0 0 1rem 1rem;
	padding: 25px;
	position: absolute;
	top: 4.375rem;
	width: 230px;
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
const CircleContainer = styled.div`
	position: relative;
	top: 1.125rem;
	right: 8rem;
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
`;
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
const Circle = styled.div`
	width: 20px;
	height: 20px;
	background: white;
	border-radius: 50%;
	position: absolute;
	overflow: hidden;
	margin: auto;
	animation: ${circle} 6s linear infinite;
`;
const GalleryHomeContainer = styled.div`
	margin: 0 11.75rem;
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	bottom: 2rem;
	left: -250px;
`;
const HeroContainer = styled.div`
	display: flex;
	flex-flow: column;
	justify-content: center;
	position: absolute;
	bottom: 3rem;
	left: 21.563rem;
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
	max-height: 30rem;
	width: 60rem;
	display: none;
	overflow: hidden;
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
const CoursesContainer = styled.section`
	margin-top: 18rem;
	display: flex;
	flex-flow: column;
`;
const CoursesGridContainer = styled.div`
	display: flex;
	flex-flow: column;
	height: 34rem;
	width: 100%;
	overflow: hidden;
`;
const CoursesTitleContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-flow: row nowrap;
`;
const CoursesGridItemsContainer = styled.div`
	display: flex;
	flex-flow: row wrap;
	height: 80%;
`;
const CoursesGridItemContainer = styled(motion.div)`
	max-width: 23%;
	margin: 1%;
	padding: 0;
`;
const CoursesGridCard = styled(Image)`
	min-width: 100%;
	min-height: 100%;
`;
const CoursesGridTitle = styled.div``;
const CoursesGridSubTitle = styled.div``;
const ExploreGlobalContaier = styled.section`
	background-color: ${(props) => props.theme.exploreContainerColor};
	margin-top: 3rem;
	padding-top: 6rem;
`;
const ExploreContianer = styled.div`
	display: flex;
	justify-content: space-between;
	flex-flow: column nowrap;
	height: 21rem;
`;
const ExploreTitleContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	min-height: 10%;
	margin-bottom: 2rem;
`;
const ExploreLinkContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	min-height: 10%;
	margin-top: 3rem;
`;
const ExploreGridItemsContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-flow: row wrap;
`;
const ExploreItemContainer = styled(motion.div)`
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
	min-width: 23%;
	min-height: 50%;
	margin-bottom: 1rem;
	align-items: center;
	background-color: #3a3b3c;
`;
const ExploreItem = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	flex-flow: row nowrap;
	width: 100%;
	height: 100%;
`;
const ExploreItemImageContainer = styled.div`
	min-width: 50%;
`;
const ExploreItemTitleContainer = styled.div`
	min-width: 50%;
`;
const ExploreItemImage = styled(Image)``;
const StudentReviewGlobalContainer = styled.div`
	margin-top: 3rem;
`;
const StudentReviewContainer = styled.section`
	display: flex;
	justify-content: space-between;
	flex-flow: column nowrap;
`;
const StudentReviewTitleContainer = styled.div`
	display: flex;
	justify-content: flex-start;
`;
const StudentReviewSlideContainer = styled.div`
	margin: 0 auto;
	overflow: hidden;
	max-width: 31.25rem;
`;
const SlideShowSlider = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-flow: row nowrap;
	white-space: nowrap;
	transition: ease 1000ms;
`;
const SlideItem = styled(motion.div)`
	display: inline-flex;
	justify-content: space-between;
	flex-flow: row wrap;
	width: 100%;
	height: 23.438rem;
	background-color: aqua;
	border-radius: 40px;
`;
const SlideImageContainer = styled.div`
	max-height: 50%;
	max-width: 50%;
`;
const SlideImage = styled(Image)`
	border-radius: 40px;
	height: 100%;
	width: 100%;
`;
const SlideTitleSubTitleContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-flow: column nowrap;
`;
const SlideParagraphContainer = styled.div`
	width: 50%;
	height: 50%;
`;
/* ---------------------------------------------Review Section END------------------------------------------------ */
/* ---------------------------------------------Article Section Start------------------------------------------------ */

const ArticleGlobalContainer = styled.section`
	background-color: ${(props) => props.theme.articleBgColor};
	margin: 5rem 0;
	height: 25rem;
`;

const ArticleContainer = styled.div`
	display: flex;
	justify-content: space-evenly;
`;
const ArticleItemContainer = styled.div`
	display: flex;
	flex-flow: column;
`;
const ArticleImageContainer = styled.div`
	& span > span > img {
		max-height: 13rem;
		max-width: 15rem;
	}
`;
const ArticleTitleContainer = styled.div`
	display: flex;
	flex-flow: column nowrap;
	justify-content: space-between;
	align-items: center;
`;
const ArticleParaContainer = styled.div``;

/* ---------------------------------------------Article Section END------------------------------------------------ */
/* ---------------------------------------------Partners Section Start------------------------------------------------ */
const PartnersSection = styled.section`
	overflow: hidden;
	margin: 2rem 0;
`;
const PartnersGlobalContainer = styled.div`
	margin: 0 auto;
	overflow: hidden;
	max-width: 500px;
`;
const PartnersSlideContainer = styled.div`
	white-space: nowrap;
	transition: ease 1000ms;
`;
const PartnersSideImageContainers = styled.div`
	display: inline-flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	& > span > span > img {
		max-height: 15rem;
	}
`;
const PartnersSlideImage = styled(Image)``;
/* ---------------------------------------------Partners Section END------------------------------------------------ */
/* ---------------------------------------------Email Section Start------------------------------------------------ */
const EmailSection = styled.section`
	background-color: ${(props) => props.theme.emailSectionBgColor};
	min-height: 25rem;
`;
const EmailSectionGlobalContainer = styled.div`
	padding-top: 2rem;
	display: flex;
	justify-content: center;
`;
const EmailImageContainer = styled.div``;
const EmailImage = styled(Image)``;
const EmailFormContainer = styled.div`
	display: flex;
	flex-flow: column nowrap;
`;
const EmailFormTitle = styled.div`
	max-width: 17rem;
`;
const EmailFormLogo = styled.div``;
const EmailForm = styled.form`
	display: flex;
	flex-flow: column nowrap;
`;
const EmailInput = styled.input`
	padding: 0.5rem;
	border: 1px solid ${(props) => props.theme.emailInputBorderColor};
	&:focus {
		outline-color: ${(props) => props.theme.emailInputFocusColor};
	}
	margin-bottom: 0.5rem;
`;
const EmailButton = styled.button`
	padding: 0.5rem;
	background-color: ${(props) => props.theme.emailButtonBgColor};
	border: none;
	color: #696969;
	font-weight: bold;
`;
/* ---------------------------------------------Email Section End------------------------------------------------ */
/* ---------------------------------------------Main end------------------------------------------------ */
/* ---------------------------------------------footer start------------------------------------------------ */
const FooterContainer = styled.footer`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-flow: column nowrap;
	height: 30rem;
`;
const FooterInfo = styled.section`
	background-color: ${(props) => props.theme.footerInfoBgColor};
	min-height: 90%;
	min-width: 100%;
`;
const FooterCopyRight = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	min-width: 100%;
	min-height: 10%;
	background-color: ${(props) => props.theme.footerCopyRightBgColor};
`;
const FooterInfoContainer = styled.div`
	display: flex;
	flex-flow: column nowrap;
	margin-top: 7rem;
`;
const FooterInfoLogo = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	margin-bottom: 2rem;
`;
const FooterDataContainer = styled.div`
	display: flex;
	justify-content: space-between;
	flex-flow: row wrap;
`;
const FooterInfoText = styled.div`
	flex: 1;
	min-height: 100%;
	margin-right: 3rem;
`;
const FooterLinkContainer = styled.div`
	flex: 1;
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	flex-flow: row nowrap;
`;
const FooterLinkGenerator = styled.div`
	display: flex;
	flex-flow: column nowrap;
`;
const FooterLinkGeneratorTitle = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: stretch;
	flex: 1;
`;
const FooterGeneratorLinkConntainer = styled.ul`
	margin: 0;
	padding: 0;
`;
const FooterLi = styled.li`
	display: block;
	list-style: none;
	margin: 0.5rem 0;
`;
const FooterCopyRightTextContainer = styled.div`
	text-align: center;
`;
/* ---------------------------------------------footer end------------------------------------------------ */
/* ---------------------------------------------Style end------------------------------------------------ */
export {
	Container,
	HeaderContainer,
	MainContainer,
	FooterContainer,
	MarginContainer,
	Nav,
	LogoBar,
	SearchContainer,
	SearchInput,
	SearchSpan,
	SearchSvg,
	NavLinkContainer,
	NavLinkButton,
	NavIcon,
	NavLi,
	NavUl,
	NavLink,
	SideBar,
	CircleContainer,
	CircleOne,
	CircleTow,
	Circle,
	GalleryContainer,
	GalleryHomeContainer,
	HeroContainer,
	SocialMediaContainer,
	InstaContainer,
	FacebookContainer,
	TwitterContainer,
	InstaSVG,
	FacebookSVG,
	InstaPath,
	TwitterSVG,
	FacebookPath,
	TwitterPath,
	ImageGallery,
	Next,
	Prev,
	CoursesContainer,
	CoursesTitleContainer,
	CoursesGridContainer,
	CoursesGridItemsContainer,
	CoursesGridItemContainer,
	CoursesGridCard,
	CoursesGridTitle,
	CoursesGridSubTitle,
	ExploreGlobalContaier,
	ExploreContianer,
	ExploreGridItemsContainer,
	ExploreItemContainer,
	ExploreItemImage,
	ExploreItem,
	ExploreItemImageContainer,
	ExploreItemTitleContainer,
	ExploreTitleContainer,
	ExploreLinkContainer,
	StudentReviewContainer,
	StudentReviewGlobalContainer,
	StudentReviewSlideContainer,
	StudentReviewTitleContainer,
	SlideShowSlider,
	SlideItem,
	SlideImageContainer,
	SlideImage,
	SlideParagraphContainer,
	SlideTitleSubTitleContainer,
	PartnersSection,
	PartnersGlobalContainer,
	PartnersSlideContainer,
	PartnersSideImageContainers,
	PartnersSlideImage,
	EmailSection,
	ArticleGlobalContainer,
	ArticleContainer,
	ArticleItemContainer,
	ArticleImageContainer,
	ArticleTitleContainer,
	ArticleParaContainer,
	EmailSectionGlobalContainer,
	EmailImageContainer,
	EmailImage,
	EmailFormContainer,
	EmailFormTitle,
	EmailFormLogo,
	EmailForm,
	EmailInput,
	EmailButton,
	FooterInfo,
	FooterCopyRight,
	FooterInfoContainer,
	FooterLi,
	FooterInfoLogo,
	FooterDataContainer,
	FooterInfoText,
	FooterLinkContainer,
	FooterLinkGenerator,
	FooterLinkGeneratorTitle,
	FooterGeneratorLinkConntainer,
	FooterCopyRightTextContainer,
};
