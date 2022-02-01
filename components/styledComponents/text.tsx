import styled from "styled-components";

const CompanyNameBar = styled.span`
	margin-left: 1.5rem;
	margin-bottom: 0;
	display: block;
	position: relative;
`;
const CompanyName = styled.h1`
	@import url("https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;1,500&display=swap");
	margin: 0;
	font-family: Lora serif;
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

export { CompanyName, CompanyNameBar };
