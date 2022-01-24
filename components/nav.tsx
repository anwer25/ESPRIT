import React from "react";
import { HomeContainer, Nav, LogoBar } from "./styledComponents/views";
import { CompanyName, CompanyNameBar } from "./styledComponents/text";
import { companyNameText } from "../utils/varibales/_varibales";
import SearchBar from "./widgets/searchBar";

const NavComponent: React.FC = (): JSX.Element => (
	<HomeContainer>
		<Nav>
			<CompanyName>
				<CompanyNameBar>
					<LogoBar />
				</CompanyNameBar>
				{companyNameText}
			</CompanyName>
			<SearchBar />
		</Nav>
	</HomeContainer>
);

export default NavComponent;
