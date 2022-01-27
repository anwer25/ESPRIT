import React, { useEffect, useState } from "react";
// eslint-disable-next-line import/extensions
import SliderWidget from "../widget/courses/slider";
import {
	SliderComponentContainer,
	SliderWidgetContainer,
	// eslint-disable-next-line import/extensions
} from "../../styled-components/view";
// eslint-disable-next-line import/extensions
import PagesNumber from "../widget/courses/slider/pagesNumber";

const Slider: React.FC = (): JSX.Element => {
	const [data, setData] = useState([]);
	useEffect(() => {
		const dataé = "";
		console.log("hello");
	}, []);

	return (
		<SliderComponentContainer>
			<PagesNumber data={data} />
			<SliderWidgetContainer>
				{!data.length ? <SliderWidget /> : <h1>hello</h1>}
			</SliderWidgetContainer>
		</SliderComponentContainer>
	);
};
export default Slider;
