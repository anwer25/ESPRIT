import React, { useContext } from "react";
import Image from "next/image";
import { ThemeProvider } from "styled-components";
import { partnersProps } from "../../utils/types";
import {
	Container,
	MarginContainer,
	PartnersImage,
	PartnersItem,
	PartnersItemContainer,
	PartnersTitle,
} from "../styled-components/view";
import Header from "../header";
import { ThemeContext } from "../../hooks/theme";
import Footer from "../footer";

const Partners: React.FC<partnersProps> = ({ data }): JSX.Element => {
	const { theme } = useContext(ThemeContext);
	return (
		<ThemeProvider theme={theme}>
			<Container>
				<Header />
				<MarginContainer>
					<PartnersItemContainer>
						{data.map(({ image, title }, index) => (
							<PartnersItem key={index}>
								<PartnersImage>
									<Image src={image} alt={title} />
								</PartnersImage>
								<PartnersTitle>
									<p>{title}</p>
								</PartnersTitle>
							</PartnersItem>
						))}
					</PartnersItemContainer>
				</MarginContainer>
				<Footer />
			</Container>
		</ThemeProvider>
	);
};
export default Partners;
