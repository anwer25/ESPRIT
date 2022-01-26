import React, { useRef } from "react";
import { useCycle } from "framer-motion";
// eslint-disable-next-line import/extensions
import useDimensions from "../../../../hooks/use-dimensions";
// eslint-disable-next-line import/extensions
import { sidebar } from "../../../../utils/animation";
// eslint-disable-next-line import/extensions
import NavButton from "./navButton";
// eslint-disable-next-line import/extensions
import Navigation from "./navigation";
// eslint-disable-next-line import/extensions
import { NavLinkContainer, SideBar } from "../../../styled-components/view";

// eslint-disable-next-line no-undef
const NavBar: React.FC = (): JSX.Element => {
	const [isOpen, toggleOpen] = useCycle(false, true);
	const containerRef = useRef(null);
	const { height } = useDimensions(containerRef);
	// @ts-ignore
	return (
		<NavLinkContainer
			initial={false}
			animate={isOpen ? "open" : "closed"}
			custom={height}
			ref={containerRef}
		>
			<SideBar variants={sidebar} />
			<Navigation />
			<NavButton toggle={() => toggleOpen()} />
		</NavLinkContainer>
	);
};

export default NavBar;
