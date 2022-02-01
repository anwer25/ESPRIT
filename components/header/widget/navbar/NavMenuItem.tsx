import React from "react";
// eslint-disable-next-line import/extensions
import { colors } from "../../../../utils/varibales";
// eslint-disable-next-line import/extensions
import { menuItemVariants } from "../../../../utils/animation";
// eslint-disable-next-line import/extensions
import { NavIcon, NavLi, NavLink } from "../../../styled-components/view";

// TODO: PASS ID AND CONTENT TO THIS COMPONENT

// @ts-ignore
const MenuItem = ({ i }) => {
	const style = { border: `2px solid ${colors[i]}` };
	// @ts-ignore
	return (
		<NavLi
			variants={menuItemVariants}
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.95 }}
		>
			<NavIcon style={style} />
			<NavLink style={style} />
		</NavLi>
	);
};

export default MenuItem;
