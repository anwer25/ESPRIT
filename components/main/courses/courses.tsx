import React from "react";
import Link from "next/link";
import {
	CoursesContainer,
	CoursesGridContainer,
	CoursesTitleContainer,
	MarginContainer,
	// eslint-disable-next-line import/extensions
} from "../../styled-components/view";
// eslint-disable-next-line import/extensions
import { CoursesTitle, StyledLink } from "../../styled-components/text";
// eslint-disable-next-line import/extensions
import { CoursesTitleText } from "../../../utils/varibales";
// eslint-disable-next-line import/extensions
import GridItems from "./grid";
// eslint-disable-next-line no-undef
const Courses: React.FC = (): JSX.Element => (
	<MarginContainer>
		<CoursesContainer>
			<CoursesGridContainer>
				<CoursesTitleContainer>
					<CoursesTitle>{CoursesTitleText}</CoursesTitle>
					<Link href="courses">
						<StyledLink>Voir tout</StyledLink>
					</Link>
				</CoursesTitleContainer>
				<GridItems />
			</CoursesGridContainer>
		</CoursesContainer>
	</MarginContainer>
);

export default Courses;
