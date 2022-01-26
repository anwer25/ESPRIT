import React from "react";
// eslint-disable-next-line import/extensions
import { NavLinkButton } from "../../../styled-components/view";
// eslint-disable-next-line import/extensions
import { Path } from "../../../../utils/animation";

// @ts-ignore
// eslint-disable-next-line no-undef
const NavButton: React.FC = ({ toggle }): JSX.Element => (
	<NavLinkButton onClick={toggle}>
		<svg width="23" height="23" viewBox="0 0 23 23">
			<Path
				variants={{
					closed: { d: "M 2 2.5 L 20 2.5" },
					open: { d: "M 3 16.5 L 17 2.5" },
				}}
			/>
			<Path
				d="M 2 9.423 L 20 9.423"
				variants={{
					closed: { opacity: 1 },
					open: { opacity: 0 },
				}}
				transition={{ duration: 0.1 }}
			/>
			<Path
				variants={{
					closed: { d: "M 2 16.346 L 20 16.346" },
					open: { d: "M 3 2.5 L 17 16.346" },
				}}
			/>
		</svg>
	</NavLinkButton>
);

export default NavButton;
