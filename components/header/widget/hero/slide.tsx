import React, { useState, useEffect, useRef } from "react";
import { partnersSlideProps } from "../../../../utils/types";
import {
	HeroSlideImageContainers,
	PartnersSlideContainer,
	PartnersSlideImage,
} from "../../../styled-components/view";

// eslint-disable-next-line no-undef
// @ts-ignore
const Slide: React.FC<partnersSlideProps> = ({ image }): JSX.Element => {
	const delay: number = 2500;
	const [index, setIndex] = useState(0);
	const timeoutRef = useRef(null);
	const resetTimeOut = () => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
	};
	useEffect(() => {
		resetTimeOut();
		// @ts-ignore
		timeoutRef.current = setTimeout(
			() =>
				setIndex((prevIndex) =>
					prevIndex === image.length - 1 ? 0 : prevIndex + 1
				),
			delay
		);
		return () => {
			resetTimeOut();
		};
	}, [index]);

	return (
		<PartnersSlideContainer
			style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
		>
			{image.map((value, itemNumber) => (
				<HeroSlideImageContainers key={itemNumber}>
					<PartnersSlideImage src={value.image} alt={value.title} />
				</HeroSlideImageContainers>
			))}
		</PartnersSlideContainer>
	);
};

export default Slide;
