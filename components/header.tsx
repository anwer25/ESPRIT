import React from "react";
import {
	NavContainer,
	CircleContainer,
	CircleOne,
	CircleTow,
	Circle,
} from "./styledComponents/views";
import NavComponent from "./nav";

const Header: React.FC = (): JSX.Element => (
	<NavContainer>
		<NavComponent />
		<CircleContainer>
			<CircleOne>
				<Circle />
				<CircleTow />
			</CircleOne>
		</CircleContainer>
	</NavContainer>
);

export default Header;
