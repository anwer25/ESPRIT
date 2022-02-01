import React, { useRef } from "react";
import { useCycle } from "framer-motion";
import useDimensions from "../../../hooks/use-dimensions";
import NavButton from "./navButton";
import Navigation from "./Navigation";
import { NavLinkContainer, SideBar } from "../../styledComponents/views";

const sidebar = {
	open: (height = 1000) => ({
		clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
		transition: {
			type: "spring",
			stiffness: 20,
			restDelta: 2,
		},
	}),
	closed: {
		clipPath: "circle(30px at 40px 40px)",
		transition: {
			delay: 0.5,
			type: "spring",
			stiffness: 400,
			damping: 40,
		},
	},
};

const NavLink: React.FC = (): JSX.Element => {
	const [isOpen, toggleOpen] = useCycle(false, true);
	const containerRef = useRef(null);
	const { height } = useDimensions(containerRef);
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

export default NavLink;
