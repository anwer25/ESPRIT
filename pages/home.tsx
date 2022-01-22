import React from "react";
import { HomeGridContainer } from "../components/styledComponents/views";
import UseThemeProviderComponent from "../hooks/theme";

// eslint-disable-next-line no-undef
const Home: React.FC = (): JSX.Element => (
	<UseThemeProviderComponent>
		<HomeGridContainer>
			<h1>Hello</h1>
		</HomeGridContainer>
	</UseThemeProviderComponent>
);

export default Home;
