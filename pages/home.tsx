import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";
import Header from "../components/header";
import { HomeGridContainer } from "../components/styledComponents/views";
import { ThemeContext } from "../hooks/theme";
import Footer from "../components/footer";
import Emailinscription from "../components/Emailinscription";
import Article from "../components/article";
import Parteneriat from "../components/parteneriat";
const Home: React.FC = (): JSX.Element => {
	const { theme } = useContext(ThemeContext);
	return (
		<ThemeProvider theme={theme}>
			<HomeGridContainer>
				<Header />
				<div>main</div>
				<Article />
				<Parteneriat />
				<Emailinscription />

				<Footer />
			</HomeGridContainer>
		</ThemeProvider>
	);
};

export default Home;
