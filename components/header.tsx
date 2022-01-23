import React from "react";
import {
	NavContainer,
	CercleContainer,
	CercleOne,
	CercleTow,
} from "./styledComponents/views";
import NavComponent from "./nav";

const Header: React.FC = (): JSX.Element => (
	<NavContainer>
		<NavComponent />
		<CercleContainer>
			<CercleOne>
				<CercleTow />
			</CercleOne>
		</CercleContainer>
	</NavContainer>
);

export default Header;
