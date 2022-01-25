import React from "react";
import Social from "../widgets/hero/social";
import { HomeContainer, HeroContainer } from "../styledComponents/views";
import Galary from "../widgets/hero/galary";

const Hero: React.FC = (): JSX.Element => (
	<HomeContainer>
		<HeroContainer>
			<Social />
			<Galary />
		</HeroContainer>
	</HomeContainer>
);

export default Hero;
