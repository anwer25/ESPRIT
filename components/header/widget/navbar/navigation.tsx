import React, { useEffect } from "react";
import MenuItem from "./NavMenuItem";
// eslint-disable-next-line import/extensions
import { NavUl } from "../../../styled-components/view";
// eslint-disable-next-line import/extensions
import { navigatorVariants } from "../../../../utils/animation";

const itemIds = [0, 1, 2, 3, 4]; // TODO: remove it and add useEffect

const Navigation = () => {
	useEffect(() => {
		console.log("from navigation useEffect");
	}, []);
	return (
		<NavUl variants={navigatorVariants}>
			{itemIds.map((i) => (
				<MenuItem i={i} key={i} />
			))}
		</NavUl>
	);
};

export default Navigation;
