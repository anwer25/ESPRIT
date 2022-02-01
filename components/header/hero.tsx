import React from "react";
import Social from "../widgets/hero/social";
import { HeroContainer, GalleryHomeContainer } from "../styledComponents/views";
import Gallery from "../widgets/hero/gallery";

const Hero: React.FC = (): JSX.Element => (
	<GalleryHomeContainer>
		<HeroContainer>
			<Social />
			<Gallery />
		</HeroContainer>
	</GalleryHomeContainer>
);

export default Hero;
