import React from "react";
import {
	CoursesGridCard,
	CoursesGridItemContainer,
	CoursesGridSubTitle,
	CoursesGridTitle,
} from "../../../../styled-components/view";

const GrideItem: React.FC = ({ data }): JSX.Element => (
	<CoursesGridItemContainer>
		<CoursesGridCard src={data.image} alt={data.title} />
		<CoursesGridTitle>
			<h1>{data.title}</h1>
		</CoursesGridTitle>
		<CoursesGridSubTitle>
			<p>{data.subTitle}</p>
		</CoursesGridSubTitle>
	</CoursesGridItemContainer>
);

export default GrideItem;
