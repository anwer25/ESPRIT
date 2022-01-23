import React from "react";
import { HomeContainer, Nav } from "./styledComponents/views";
import { CompanyName, CompanyNameBar } from "./styledComponents/text";
import { companyNameText } from "../utils/varibales/_varibales";

const NavComponent: React.FC = (): JSX.Element => {
	const data = "hello";
	return (
		<HomeContainer>
			<Nav>
				<CompanyName>
					<CompanyNameBar>------</CompanyNameBar>
					{companyNameText}
				</CompanyName>
			</Nav>
		</HomeContainer>
	);
};

export default NavComponent;
