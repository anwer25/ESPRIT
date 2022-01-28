import React, { useEffect, useState } from "react";
import { CoursesGridItemsContainer } from "../../styled-components/view";
import GrideItem from "../widget/courses/gride";
import image from "../../../public/Rectangle28(1).png";
import ss from "../../../public/Rectangle28(2).png";
import sd from "../../../public/Rectangle28(3).png";
import sxxx from "../../../public/Rectangle28(4).png";
import xcc from "../../../public/Rectangle28(5).png";
import sx from "../../../public/Rectangle28.png";
import xx from "../../../public/Thumbnail.png";
import xxxx from "../../../public/Rectangle28(6).png";

const GridItems: React.FC = (): JSX.Element => {
	const [data, setData] = useState([
		{ image, title: "Image1", subTitle: "Image 1 SubTitle" },
		{ image: ss, title: "Image2", subTitle: "Image 2 SubTitle " },
		{ image: sd, title: "Image3", subTitle: "Image 3 SubTitle" },
		{ image: sxxx, title: "Image4", subTitle: "Image 4 SubTitle" },
		{ image: xcc, title: "Image5", subTitle: "Image 5 SubTitle" },
		{ image: sx, title: "Image6", subTitle: "Image 7 SubTitle" },
		{ image: xx, title: "Image7", subTitle: "Image 8 SubTitle" },
		{ image: xxxx, title: "Image8", subTitle: "Image 9 SubTitle" },
	]);
	useEffect(() => {}, []);
	// @ts-ignore
	// @ts-ignore
	return (
		<CoursesGridItemsContainer>
			{data.map((value, index) => (
				<GrideItem data={value} key={index} />
			))}
		</CoursesGridItemsContainer>
	);
};
export default GridItems;
