import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { ThemeContext } from "../hooks/theme";
import { HomeGridContainer } from "./styledComponents/views";

const GlobalContainer: React.FC = ({ children }): JSX.Element => {
	const { theme } = useContext(ThemeContext);
	return (
		<ThemeProvider theme={theme}>
			<HomeGridContainer>{children}</HomeGridContainer>
		</ThemeProvider>
	);
};

export default GlobalContainer;
