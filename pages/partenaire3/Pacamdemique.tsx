import React from "react";
import {
	CoursesContainer,
	CoursesGridContainer,
	CoursesTitleContainer,
	MarginContainer,
	// eslint-disable-next-line import/extensions
} from "../../components/styled-components/view";
// eslint-disable-next-line import/extensions
import { CoursesTitle } from "../../components/styled-components/text";
// eslint-disable-next-line import/extensions
import { CoursesTitleText } from "../../utils/varibales";
// eslint-disable-next-line import/extensions
// eslint-disable-next-line no-unused-vars
import GridItemsP3 from "./grid";
// eslint-disable-next-line no-undef
const Pacademique: React.FC = (): JSX.Element => (
	<MarginContainer>
		<CoursesContainer>
			<CoursesGridContainer>
				<CoursesTitleContainer>
					<CoursesTitle>{CoursesTitleText}</CoursesTitle>
				</CoursesTitleContainer>
				<GridItemsP3 />
			</CoursesGridContainer>
		</CoursesContainer>
	</MarginContainer>
);

export default Pacademique;
