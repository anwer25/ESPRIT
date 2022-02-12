import React, { useEffect, useState } from "react";
import {
	HeroContainer,
	HeroSlideContainer,
} from "../../../styled-components/view";
import Social from "./social";
import esprit from "../../../../public/esprit.jpg";
import header from "../../../../public/header.jpg";
import header1 from "../../../../public/header1.jpg";
import header2 from "../../../../public/header2.png";
import Slide from "./slide";

// eslint-disable-next-line no-undef
const Hero: React.FC = (): JSX.Element => {
	const [data, setData] = useState<Array<object>>([]);
	useEffect(() => {
		console.log("hello");
		setData([
			{ image: esprit, title: "1" },
			{ image: header, title: "2" },
			{ image: header1, title: "3" },
			{ image: header2, title: "4" },
		]);
	}, []);
	return (
		<HeroContainer>
			<Social />
			<HeroSlideContainer>
				<Slide image={data} />
			</HeroSlideContainer>
		</HeroContainer>
	);
};

export default Hero;
