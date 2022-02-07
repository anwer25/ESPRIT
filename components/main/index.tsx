import React from "react";
// eslint-disable-next-line import/extensions
import { MainContainer } from "../styled-components/view";
// eslint-disable-next-line import/extensions
import Courses from "./courses/courses";
// eslint-disable-next-line import/extensions
import Explore from "./explore";
import StudentReview from "./review/index.";
import Emailinscription from "./email";
import Article from "./article";
import Partner from "./partner";

// eslint-disable-next-line no-undef
const Main: React.FC = (): JSX.Element => (
	<MainContainer>
		<Courses />
		<Explore />
		{/* <StudentReview /> */}
		<Article />
		<Partner />
		<Emailinscription />
	</MainContainer>
);

export default Main;
