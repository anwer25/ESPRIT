import * as React from "react";
import { NavIcon, NavLi, NavLink } from "../../styledComponents/views";
import { colors } from "../../../utils/varibales/_varibales";

const variants = {
	open: {
		y: 0,
		visibility: "visible",
		opacity: 1,
		transition: {
			y: { stiffness: 1000, velocity: -100 },
		},
	},
	closed: {
		y: 50,
		opacity: 0,
		visibility: "hidden",
		transition: {
			y: { stiffness: 1000 },
		},
	},
};

const MenuItem = ({ i }) => {
	const style = { border: `2px solid ${colors[i]}` };
	return (
		<NavLi
			variants={variants}
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.95 }}
		>
			<NavIcon style={style} />
			<NavLink style={style} />
		</NavLi>
	);
};

export default MenuItem;
