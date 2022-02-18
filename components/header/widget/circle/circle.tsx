import React from "react";
import {
	Circle,
	CircleContainer,
	CircleOne,
	CircleTow,
} from "../../../styled-components/view";

// eslint-disable-next-line no-undef
const MainCircle: React.FC = (): JSX.Element => (
	<CircleContainer>
		<CircleOne>
			<Circle />
			<CircleTow />
		</CircleOne>
	</CircleContainer>
);

export default MainCircle;
