import React from "react";
import {
	CoursesGridCard,
	CoursesGridItemContainer,
	CoursesGridTitle,
} from "../../../../styled-components/view";

const GrideItem: React.FC = ({ data }): JSX.Element => (
	<CoursesGridItemContainer>
		<CoursesGridCard />
		<CoursesGridTitle />
	</CoursesGridItemContainer>
);

export default GrideItem;
