import React from "react";
import Link from "next/link";
import {
	Br,
	CoursesTitleContainer,
	MainContainer,
} from "../styled-components/view";
// eslint-disable-next-line import/extensions
import Courses from "./courses/courses";
// eslint-disable-next-line import/extensions
import Explore from "./explore";
import Emailinscription from "./email";
import Article from "./article";
import Partner from "./partner";
import Industriel from "./industriel";
import Technologic from "./technologique";

// eslint-disable-next-line no-undef
const Main: React.FC = (): JSX.Element => (
	<MainContainer>
		<Courses />
		<Br />
		<Explore />
		{/* <StudentReview /> */}
		<h1
			style={{
				color: "black",
				textAlign: "center",
				fontFamily: "Arial",
				fontWeight: "bold",
			}}
		>
			{" "}
			PARTENAIRE ESPRIT{" "}
		</h1>
		<CoursesTitleContainer>
			<Link href="/partners/acdemique" passHref>
				<a
					style={{
						backgroundColor: "lightgray",
						fontWeight: "bold",
						margin: "1rem",
						textAlign: "center",
						textDecoration: "none",
						color: "gray",
					}}
				>
					Academique <Partner />
				</a>
			</Link>
			<Link href="/partners/industriels" passHref>
				<a
					style={{
						backgroundColor: "lightgray",
						fontWeight: "bold",
						margin: "1rem",
						textAlign: "center",
						textDecoration: "none",
						color: "Gray",
					}}
				>
					Industriels
					<Industriel />
				</a>
			</Link>
			<Link href="/partners/technolgique" passHref>
				<a
					style={{
						backgroundColor: "lightgray",
						fontWeight: "bold",
						margin: "1rem",
						textAlign: "center",
						textDecoration: "none",
						color: "gray",
					}}
				>
					Technologique
					<Technologic />
				</a>
			</Link>
		</CoursesTitleContainer>

		<Article />
		<Emailinscription />
	</MainContainer>
);

export default Main;
