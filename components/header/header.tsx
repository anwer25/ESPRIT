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
import NavLink from "../widgets/NavBar/navLink";

const Header: React.FC = (): JSX.Element => (
	<div>
		<NavContainer>
			<NavComponent />
			<CircleContainer>
				<CircleOne>
					<Circle />
					<CircleTow />
				</CircleOne>
			</CircleContainer>
		</NavContainer>
		<NavLink />
		<Hero />
	</div>
);

export default Header;
