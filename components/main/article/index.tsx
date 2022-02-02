import React from "react";
import Image from "next/image";
import {
	EmailSection,
	ColorH1Blue,
	DisplayContainer,
	ListContainer,
	BrComponent,
} from "../../styled-components/view";

const myLoader = ({ src, width, quality }) =>
	`${src}?w=${width}&q=${quality || 75}`;

// eslint-disable-next-line no-undef
const Article: React.FC = (): JSX.Element => (
	<EmailSection>
		<ListContainer>
			<DisplayContainer
				style={{
					textAlign: "center",
					right: "110px",
					position: "relative",
				}}
			>
				<Image
					loader={myLoader}
					src="./design1.svg"
					alt="design"
					width={180}
					height={180}
				/>
				<ColorH1Blue>
					{" "}
					<h1 style={{ fontSize: "50px" }}>599 </h1>
					<h1> Top Courses</h1>{" "}
				</ColorH1Blue>
				<p>
					{" "}
					Take courses from the world's best
					<BrComponent /> instructors an universities{" "}
				</p>
			</DisplayContainer>
			<DisplayContainer
				style={{
					textAlign: "center",
					position: "relative",
				}}
			>
				<Image
					loader={myLoader}
					src="./design2.svg"
					alt="design"
					width={180}
					height={180}
				/>
				<ColorH1Blue>
					{" "}
					<h1 style={{ fontSize: "50px" }}> 9999 </h1>
					<h1> Happy learners</h1>{" "}
				</ColorH1Blue>
				<p> Learners from all around the world </p>
			</DisplayContainer>
			<DisplayContainer
				style={{
					textAlign: "center",
					left: "110px",
					position: "relative",
				}}
			>
				<Image
					loader={myLoader}
					src="./design3.svg"
					alt="design"
					width={180}
					height={180}
				/>
				<ColorH1Blue style={{ display: "block" }}>
					<h1 style={{ fontSize: "50px" }}>578 </h1>

					<h1>Eminent Instructors</h1>
				</ColorH1Blue>
				<p> Learn your favorite course with world-class instructors </p>
			</DisplayContainer>
		</ListContainer>
	</EmailSection>
);

export default Article;
