import React from "react";
import Social from "./social";
import {
	HeroContainer,
	GalleryHomeContainer,
} from "../../../styled-components/view";
import Gallery from "./gallery";

// eslint-disable-next-line no-undef
const Hero: React.FC = (): JSX.Element => (
	<GalleryHomeContainer>
		<HeroContainer>
			<Social />
			<Gallery />
		</HeroContainer>
	</GalleryHomeContainer>
);

export default Hero;
