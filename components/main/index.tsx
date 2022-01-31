import React from "react";
// eslint-disable-next-line import/extensions
import { MainContainer } from "../styled-components/view";
// eslint-disable-next-line import/extensions
import Courses from "./courses/courses";
// eslint-disable-next-line import/extensions
import Explore from "./explore";
import StudentReview from "./review/index.";

// eslint-disable-next-line no-undef
const Main: React.FC = (): JSX.Element => (
	<MainContainer>
		<Courses />
		<Explore />
		<StudentReview />
	</MainContainer>
);

export default Main;
