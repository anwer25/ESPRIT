import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { slideProps } from "../../../../../utils/types";
import {
	SlideImage,
	SlideImageContainer,
	SlideItem,
	SlideParagraphContainer,
	SlideShowSlider,
	SlideTitleSubTitleContainer,
	StudentReviewSlideContainer,
} from "../../../../styled-components/view";
import {
	ReviewSlideSubTitle,
	ReviewSlideText,
	ReviewSlideTitle,
	StudentReviewTitle,
} from "../../../../styled-components/text";

// eslint-disable-next-line no-undef
// @ts-ignore
const Slider: React.FC<slideProps> = ({ reviews }): JSX.Element => {
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
					prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
				),
			delay
		);
		return () => {
			resetTimeOut();
		};
	}, [index]);

	return (
		<StudentReviewSlideContainer>
			<SlideShowSlider
				style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
			>
				{reviews.map((value, mapIndex) => (
					<SlideItem key={mapIndex}>
						<SlideImageContainer>
							<SlideImage src={value.image} alt={value.name} />
						</SlideImageContainer>
						<SlideTitleSubTitleContainer>
							<ReviewSlideTitle>{value.name}</ReviewSlideTitle>
							<ReviewSlideSubTitle>
								{value.title}
							</ReviewSlideSubTitle>
						</SlideTitleSubTitleContainer>
						<SlideParagraphContainer>
							<ReviewSlideText>{value.paragraph}</ReviewSlideText>
						</SlideParagraphContainer>
					</SlideItem>
				))}
			</SlideShowSlider>
		</StudentReviewSlideContainer>
	);
};

export default Slider;
