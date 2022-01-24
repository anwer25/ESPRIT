import React from "react";
import NavButtonSVG from "./navButtonSVG";
import { NavLinkButton } from "../styledComponents/views";

// TODO : add button Function

const NavLink: React.FC = (): JSX.Element => (
	<div>
		<NavLinkButton>
			<NavButtonSVG />
		</NavLinkButton>
	</div>
);

export default NavLink;
