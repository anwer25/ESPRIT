import React from "react";
import Link from "next/link";
import {
	CoursesGridCard,
	CoursesGridItemContainer,
	CoursesGridSubTitle,
	CoursesGridTitle,
	// eslint-disable-next-line import/extensions
} from "../../../../styled-components/view";
import {
	CoursesCardSubTitle,
	CoursesCardTitle,
	StyledLink,
	// eslint-disable-next-line import/extensions
} from "../../../../styled-components/text";

// @ts-ignore
// eslint-disable-next-line no-undef
const GridItem: React.FC = ({ data }): JSX.Element => (
	<CoursesGridItemContainer
		whileHover={{ scale: 0.8, transition: { duration: 1 } }}
		whileTap={{ scale: 1.1 }}
	>
		<Link href={`courses/${encodeURIComponent(data.title)}`}>
			<StyledLink>
				<CoursesGridCard src={data.image} alt={data.title} />
				<CoursesGridTitle>
					<CoursesCardTitle>{data.title}</CoursesCardTitle>
				</CoursesGridTitle>
				<CoursesGridSubTitle>
					<CoursesCardSubTitle>{data.subTitle}</CoursesCardSubTitle>
				</CoursesGridSubTitle>
			</StyledLink>
		</Link>
	</CoursesGridItemContainer>
);

export default GridItem;
