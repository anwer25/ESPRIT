import styled from "styled-components";
import { motion } from "framer-motion";
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
`;

export { CompanyName, CompanyNameBar, CoursesTitle };
