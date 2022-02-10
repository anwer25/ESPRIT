import React, { useEffect, useState } from "react";
import {
	HeroContainer,
	HeroSlideContainer,
} from "../../../styled-components/view";
import Social from "./social";
import p1 from "../../../../public/p1.png";
import p2 from "../../../../public/p2.png";
import p3 from "../../../../public/p4.png";
import p4 from "../../../../public/p5.jpg";
import Slide from "./slide";

// eslint-disable-next-line no-undef
const Hero: React.FC = (): JSX.Element => {
	const [data, setData] = useState<Array<object>>([]);
	useEffect(() => {
		console.log("hello");
		setData([
			{ image: p1, title: "p1" },
			{ image: p2, title: "p2" },
			{ image: p3, title: "p3" },
			{ image: p4, title: "p4" },
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
