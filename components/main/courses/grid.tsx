import React, { useEffect, useState } from "react";
import { CoursesGridItemsContainer } from "../../styled-components/view";
import GrideItem from "../widget/courses/gride";

const GridItems: React.FC = (): JSX.Element => {
	const [data, setData] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
	useEffect(() => {
		const dataé = "";
		console.log("hello");
	}, []);
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
