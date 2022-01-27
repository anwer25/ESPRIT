import React from "react";
import { SliderNumberUlContainer } from "../../../../styled-components/view";

const PagesNumber: React.FC = ({ data }): JSX.Element => (
	<SliderNumberUlContainer>
		{!data.length ? (
			<ul>
				<li>0</li>
			</ul>
		) : (
			<h1>sdff</h1>
		)}
	</SliderNumberUlContainer>
);

export default PagesNumber;
