import React from "react";

import {
	CoursesTitleContainer,
	ExploreItemContainer,
	MainContainer,
} from "../styled-components/view";
// eslint-disable-next-line import/extensions
import Courses from "./courses/courses";
// eslint-disable-next-line import/extensions
import Explore from "./explore";
import StudentReview from "./review/index.";
import Emailinscription from "./email";
import Article from "./article";
import Partner from "./partner";
import Industriel from "./industriel";
import Technologic from "./technologique";

// eslint-disable-next-line no-undef
const Main: React.FC = (): JSX.Element => (
	<MainContainer>
		<Courses />
		<Explore />
		{/* <StudentReview /> */}
		<h1 style={{ color: "red", textAlign: "center" }}> Partenaire </h1>

		<CoursesTitleContainer>
			<a
				style={{
					backgroundColor: "lightgray",
					fontWeight: "bold",
					margin: "1rem",
					textAlign: "center",
					color: "#837E7C",
				}}
			>
				Academique <Partner />
			</a>
			<a
				style={{
					backgroundColor: "lightgray",
					fontWeight: "bold",
					margin: "1rem",
					textAlign: "center",
					color: "#837E7C",
				}}
			>
				Industriels
				<Industriel />
			</a>
			<a
				style={{
					backgroundColor: "lightgray",
					fontWeight: "bold",
					margin: "1rem",
					textAlign: "center",
					color: "#837E7C",
				}}
			>
				Technologique
				<Technologic />
			</a>
		</CoursesTitleContainer>

		<Article />
		<Emailinscription />
	</MainContainer>
);

export default Main;
