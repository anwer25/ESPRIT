import React from "react";
import {
	NavContainer,
	CircleContainer,
	CircleOne,
	CircleTow,
	Circle,
} from "../styledComponents/views";
import Hero from "./hero";
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
		<Hero />
	</NavContainer>
);

export default Header;
