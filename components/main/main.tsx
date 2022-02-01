import React from "react";
import { HomeContainer, MainContainer } from "../styledComponents/views";
import Courses from "./courses";

const Main: React.FC = (): JSX.Element => (
	<HomeContainer>
		<MainContainer>
			<Courses />
		</MainContainer>
	</HomeContainer>
);
export default Main;
