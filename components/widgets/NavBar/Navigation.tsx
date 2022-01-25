import * as React from "react";
import MenuItem from "./menuItem";
import { NavUl } from "../../styledComponents/views";

const variants = {
	open: {
		transition: { staggerChildren: 0.07, delayChildren: 0.2 },
	},
	closed: {
		transition: { staggerChildren: 0.05, staggerDirection: -1 },
	},
};

const itemIds = [0, 1, 2, 3, 4];

const Navigation = () => (
	<NavUl variants={variants}>
		{itemIds.map((i) => (
			<MenuItem i={i} key={i} />
		))}
	</NavUl>
);

export default Navigation;
