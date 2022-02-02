import React from "react";
import {
	FooterPartners,
	FooterPartnersLinkConntainer,
	FooterPartnersTitle,
} from "../../../styled-components/view";
import { FooterPartnersText } from "../../../styled-components/text";

// eslint-disable-next-line no-undef
const Partners: React.FC = (): JSX.Element => (
	<FooterPartners>
		<FooterPartnersTitle>
			<FooterPartnersText>Partners</FooterPartnersText>
		</FooterPartnersTitle>
		<FooterPartnersLinkConntainer />
	</FooterPartners>
);

export default Partners;
