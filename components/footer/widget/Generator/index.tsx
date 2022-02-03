import React from "react";
import Link from "next/link";
import {
	FooterGeneratorText,
	StyledLink,
} from "../../../styled-components/text";
import {
	FooterGeneratorLinkConntainer,
	FooterLi,
	FooterLinkGenerator,
	FooterLinkGeneratorTitle,
} from "../../../styled-components/view";
import { linkGeneratorProps } from "../../../../utils/types";

// eslint-disable-next-line no-undef
const LinkGenerator: React.FC<linkGeneratorProps> = ({
	links,
	section,
}): JSX.Element => (
	<FooterLinkGenerator>
		<FooterLinkGeneratorTitle>
			<FooterGeneratorText>{section}</FooterGeneratorText>
		</FooterLinkGeneratorTitle>
		<FooterGeneratorLinkConntainer>
			{links.map((value, index) => (
				<FooterLi key={index}>
					<Link href={value.link}>
						<StyledLink>{value.name}</StyledLink>
					</Link>
				</FooterLi>
			))}
		</FooterGeneratorLinkConntainer>
	</FooterLinkGenerator>
);

export default LinkGenerator;
