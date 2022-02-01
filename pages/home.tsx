import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { Container } from "../components/styled-components/view";
import { ThemeContext } from "../hooks/theme";
import Header from "../components/header";
import Main from "../components/main";
import Footer from "../components/footer";

function Home() {
	const { theme } = useContext(ThemeContext);
	return (
		<ThemeProvider theme={theme}>
			<Container>
				<Header />
				<Main />
				<Footer />
			</Container>
		</ThemeProvider>
	);
}

export default Home;
