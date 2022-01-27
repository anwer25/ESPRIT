import React from "react";
import { MainContainer, MarginContainer } from "../styled-components/view";
import Courses from "./courses/courses";

const Main: React.FC = (): JSX.Element => (
	<MainContainer>
		<MarginContainer>
			<Courses />
		</MarginContainer>
	</MainContainer>
);

export default Main;
