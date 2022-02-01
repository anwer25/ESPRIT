import React from "react";
import Link from "next/link";
import { gridItemProps } from "../../../../../utils/types";
import {
	ExploreGridItemsContainer,
	ExploreItem,
	ExploreItemContainer,
	ExploreItemImage,
	ExploreItemImageContainer,
	ExploreItemTitleContainer,
} from "../../../../styled-components/view";
import {
	ExploreItemTitle,
	StyledLink,
} from "../../../../styled-components/text";

// eslint-disable-next-line no-undef
const ExploreGridItem: React.FC<gridItemProps> = ({ data }): JSX.Element => (
	<ExploreGridItemsContainer>
		{data.map((value, index) => (
			<ExploreItemContainer key={index}>
				<Link href={`explore/${encodeURIComponent(value.title)}`}>
					<StyledLink style={{ display: "block", width: "100%" }}>
						<ExploreItem>
							<ExploreItemImageContainer>
								<ExploreItemImage
									src={value.image}
									alt={value.title}
								/>
							</ExploreItemImageContainer>
							<ExploreItemTitleContainer>
								<ExploreItemTitle>
									{value.title}
								</ExploreItemTitle>
							</ExploreItemTitleContainer>
						</ExploreItem>
					</StyledLink>
				</Link>
			</ExploreItemContainer>
		))}
	</ExploreGridItemsContainer>
);

export default ExploreGridItem;
