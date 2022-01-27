import React from "react";
import {
	CoursesContainer,
	CoursesSlideContainer,
	CoursesTitleContainer,
	// eslint-disable-next-line import/extensions
} from "../../styled-components/view";
// eslint-disable-next-line import/extensions
import { CoursesTitle } from "../../styled-components/text";
// eslint-disable-next-line import/extensions
import { CoursesTitleText } from "../../../utils/varibales";
import Slider from "./slider";
// eslint-disable-next-line no-undef
const Courses: React.FC = (): JSX.Element => (
	<CoursesContainer>
		<CoursesTitleContainer>
			<CoursesTitle>{CoursesTitleText}</CoursesTitle>
		</CoursesTitleContainer>
		<CoursesSlideContainer>
			<Slider />
		</CoursesSlideContainer>
	</CoursesContainer>
);

export default Courses;
