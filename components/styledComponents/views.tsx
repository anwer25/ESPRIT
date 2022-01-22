// @ts-ignore
import styled from "styled-components";
import { defaultNavContainerColor } from "../../utils/varibales/_varibales";

const HomeGridContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(3, 1fr);
	grid-column-gap: 0;
	grid-row-gap: 0;
`;

const HomeContainer = styled.div`
	margin: 0; // change it
`;

const HomeHeader = styled.header``;

const NavContainer = styled.div`
	background-color: ${defaultNavContainerColor};
`;

export { HomeGridContainer, HomeHeader, HomeContainer, NavContainer };
