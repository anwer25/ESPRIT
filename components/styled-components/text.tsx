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

// Footer

const FooterTextInfo = styled.p`
	color: ${(props) => props.theme.footerInfoTextColor};
	font-size: 1rem;
	display: block;
	min-height: 100%;
	margin: 0;
`;

const FooterPartnersText = styled.p`
	color: ${(props) => props.theme.footerPartnersTextColor};
	font-size: 1rem;
`;
const FooterTextCopyRight = styled.h4`
	text-align: center;
	color: ${(props) => props.theme.footerTextCopyRightColor};
	margin: 0;
	padding: 0;
`;

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
	FooterTextInfo,
	FooterTextCopyRight,
	FooterPartnersText,
};
