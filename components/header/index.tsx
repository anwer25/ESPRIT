import React from "react";
import {
	HeaderContainer,
	MarginContainer,
	Nav,
	LogoBar,
	// eslint-disable-next-line import/extensions
} from "../styled-components/view";
// eslint-disable-next-line import/extensions
import { CompanyName, CompanyNameBar } from "../styled-components/text";
// eslint-disable-next-line import/extensions
import { companyNameText } from "../../utils/varibales";
// eslint-disable-next-line import/extensions
import SearchBar from "./widget/search/searchBar";
// eslint-disable-next-line import/extensions
import NavBar from "./widget/navbar/navBar";
import MainCircle from "./widget/circle/circle";
import Hero from "./widget/hero";

// eslint-disable-next-line no-undef
const Header: React.FC = (): JSX.Element => (
	<HeaderContainer>
		<MarginContainer>
			<Nav>
				<CompanyName>
					<CompanyNameBar>
						<LogoBar />
					</CompanyNameBar>
					{companyNameText}
				</CompanyName>
				<SearchBar />
				<div>.</div>
			</Nav>
			<Hero />
		</MarginContainer>
		<MainCircle />
		<NavBar />
	</HeaderContainer>
);

export default Header;
