import React from "react";
// eslint-disable-next-line import/extensions
import { MainContainer, MarginContainer } from "../styled-components/view";
// eslint-disable-next-line import/extensions
import Courses from "./courses/courses";

// eslint-disable-next-line no-undef
const Main: React.FC = (): JSX.Element => (
	<MainContainer>
		<MarginContainer>
			<Courses />
		</MarginContainer>
	</MainContainer>
);

export default Main;
