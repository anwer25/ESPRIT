import styled from "styled-components";
import { fonts } from "../../utils/varibales";

const CompanyNameBar = styled.span`
	margin-left: 1.5rem;
	margin-bottom: 0;
	display: block;
	position: relative;
`;

const CompanyName = styled.h1`
	@import url(${fonts.companyName.Lora.url});
	margin: 0 0 0 0;
	font-family: ${fonts.companyName.Lora.fontFamily};
	font-weight: 500;
	color: ${(props) => props.theme.companyNameColor};
	&::after {
		content: "\\25b6";
		display: inline-block;
		font-size: 0.813rem;
		position: relative;
		bottom: 0.688rem;
		left: 0.438rem;
		color: ${(props) => props.theme.companyArrowColor};
	}
`;

const CoursesTitle = styled.h3`
	@import url("https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,wght@1,600&display=swap");
	font-family: "Source Serif 4", sans-serif;
	color: ${(props) => props.theme.coursesTitleColor};
	font-weight: bold;
	font-size: 3rem;
	margin: 0;
	padding: 0;
	width: 50%;
`;

const StyledLink = styled.a`
	text-decoration: none;
	color: black;
	cursor: pointer;
	& sapn > span > img {
		min-height: 12rem;
		min-width: 12rem;
		max-width: 13rem;
		max-height: 13rem;
	}
`;

const CoursesCardTitle = styled.h3`
	margin: 3px 0 0 0;
	padding: 0;
	color: ${(props) => props.theme.coursesCardTitelColor};
`;
const CoursesCardSubTitle = styled.p`
	margin: 0;
	padding: 0;
	color: ${(props) => props.theme.coursesCardSubTitlelColor};
`;

const ExploreTitle = styled.h3`
	margin: 0;
	padding: 0;
	color: ${(props) => props.theme.exploreTilteColor};
	font-family: "Source Serif 4", sans-serif;
	font-weight: bold;
	font-size: 3rem;
`;
const ExploreItemTitle = styled.p``;
const StudentReviewTitle = styled.h3`
	font-size: 3rem;
	color: ${(props) => props.theme.studentReviewTitleColor};
	font-family: "Source Serif 4", sans-serif;
`;

const ReviewSlideTitle = styled.p``;
const ReviewSlideSubTitle = styled.p``;
const ReviewSlideText = styled.p``;
/* ---------------------Article Section Start---------------- */

const ArticleNumberText = styled.p`
	color: ${(props) => props.theme.articleNumberTextColor};
	font-size: large;
	font-weight: bold;
`;
const ArticleTitleText = styled.h3`
	color: ${(props) => props.theme.ArticleTitleTextColor};
	font-weight: bolder;
	margin-top: 0;
`;
const ArticleText = styled.p`
	color: ${(props) => props.theme.artivleTextColor};
	margin-top: 0;
	text-align: center;
`;
/* ---------------------Article Section END---------------- */
/* ---------------------EmailSection Start---------------- */

const EmailFormTitleText = styled.p`
	font-size: 2rem;
	margin: 0;
	padding: 0;
	color: ${(props) => props.theme.emailFormTitleTextColor};
`;

const EmailFormLogoText = styled.h1`
	@import url(${fonts.companyName.Lora.url});
	margin: 0 0 0 0;
	padding: 0;
	font-family: ${fonts.companyName.Lora.fontFamily};
	font-weight: 500;
	color: ${(props) => props.theme.emailFormLogo};
	font-size: 7rem;
`;

/* ---------------------EmailSection END---------------- */
/* ---------------------Footer Start---------------- */
const FooterTextInfo = styled.p`
	color: ${(props) => props.theme.footerInfoTextColor};
	font-size: 1rem;
	display: block;
	min-height: 100%;
	margin: 0;
	word-break: break-all;
	line-height: 1.5rem;
`;
const FooterGeneratorText = styled.p`
	color: white;
	font-size: 1rem;
	font-weight: bold;
	position: relative;
	bottom: 1rem;
`;

const FooterTextCopyRight = styled.h4`
	text-align: center;
	color: darkgray;
	font-family: arial;
	margin: 0;
	padding: 0;
`;
/* ---------------------Footer END---------------- */
export {
	CompanyName,
	CompanyNameBar,
	CoursesTitle,
	CoursesCardTitle,
	CoursesCardSubTitle,
	StyledLink,
	ExploreTitle,
	ExploreItemTitle,
	StudentReviewTitle,
	ReviewSlideSubTitle,
	ReviewSlideTitle,
	ReviewSlideText,
	ArticleNumberText,
	ArticleTitleText,
	ArticleText,
	EmailFormTitleText,
	EmailFormLogoText,
	FooterTextInfo,
	FooterTextCopyRight,
	FooterGeneratorText,
};
