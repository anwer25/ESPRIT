import React from "react";
import Link from "next/link";
import GridItems from "./girdItems";
import {
	ExploreContianer,
	ExploreGlobalContaier,
	ExploreLinkContainer,
	ExploreTitleContainer,
	MarginContainer,
	// eslint-disable-next-line import/extensions
} from "../../styled-components/view";
import { ExploreTitle, StyledLink } from "../../styled-components/text";

const Explore: React.FC = (): JSX.Element => (
	<ExploreGlobalContaier>
		<MarginContainer>
			<ExploreContianer>
				<ExploreTitleContainer>
					<ExploreTitle>EXPLOREZ ESPRIT</ExploreTitle>
				</ExploreTitleContainer>
				<GridItems />
				<ExploreLinkContainer>
					<Link href="explore">
						<StyledLink>Voir tout</StyledLink>
					</Link>
				</ExploreLinkContainer>
			</ExploreContianer>
		</MarginContainer>
	</ExploreGlobalContaier>
);

export default Explore;
