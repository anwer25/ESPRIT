import styled from "styled-components";
import {
	defaultNavContainerColor,
	defaultCercleBorderColor,
	defaultSecondCercleBgColor,
	defaultSecondCercleGradientColor,
} from "../../utils/varibales/_varibales";

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

CercleOne.defaultProps = {
	theme: {
		cercleBorder: defaultCercleBorderColor,
	},
};

CercleTow.defaultProps = {
	theme: {
		cerecleBorder: defaultCercleBorderColor,
		gradient: defaultSecondCercleGradientColor,
		background: defaultSecondCercleBgColor,
	},
};

NavContainer.defaultProps = {
	theme: {
		navContainerColor: defaultNavContainerColor,
	},
};

export {
	HomeGridContainer,
	HomeHeader,
	HomeContainer,
	NavContainer,
	CercleContainer,
	CercleOne,
	CercleTow,
	Nav,
};
