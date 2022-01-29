import React from "react";
import {
	CoursesContainer,
	CoursesGridContainer,
	CoursesTitleContainer,
	// eslint-disable-next-line import/extensions
} from "../../styled-components/view";
// eslint-disable-next-line import/extensions
import { CoursesTitle } from "../../styled-components/text";
// eslint-disable-next-line import/extensions
import { CoursesTitleText } from "../../../utils/varibales";
// eslint-disable-next-line import/extensions
import GridItems from "./grid";
// eslint-disable-next-line no-undef
const Courses: React.FC = (): JSX.Element => (
	<CoursesContainer>
		<CoursesGridContainer>
			<CoursesTitleContainer>
				<CoursesTitle>{CoursesTitleText}</CoursesTitle>
			</CoursesTitleContainer>
			<GridItems />
		</CoursesGridContainer>
	</CoursesContainer>
);

export default Courses;
