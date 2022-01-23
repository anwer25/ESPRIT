import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";
import Header from "../components/header";
import { HomeGridContainer } from "../components/styledComponents/views";
import { ThemeContext } from "../hooks/theme";

// eslint-disable-next-line no-undef
const Home: React.FC = (): JSX.Element => {
	const { theme } = useContext(ThemeContext);
	return (
		<ThemeProvider theme={theme}>
			<HomeGridContainer>
				<Header />
			</HomeGridContainer>
		</ThemeProvider>
	);
};

export default Home;
