import React, { useState, useEffect, useRef } from "react";
import { slideProps } from "../../../../../utils/types";

// eslint-disable-next-line no-undef
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
};

export default Slider;
