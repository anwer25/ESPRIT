import React from "react";
import {
	EmailForm,
	EmailFormContainer,
	EmailFormLogo,
	EmailFormTitle,
	EmailImage,
	EmailImageContainer,
	EmailSection,
	EmailSectionGlobalContainer,
	LogoBar,
	MarginContainer,
} from "../../styled-components/view";
import {
	CompanyName,
	CompanyNameBar,
	EmailFormLogoText,
	EmailFormTitleText,
} from "../../styled-components/text";
import { companyNameText } from "../../../utils/varibales";

const Email: React.FC = (): JSX.Element => (
	<EmailSection>
		<MarginContainer>
			<EmailSectionGlobalContainer>
				<EmailImageContainer>
					<EmailImage
						src="/./design.svg"
						width="300px"
						height="300px"
						alt="herro"
					/>
				</EmailImageContainer>
				<EmailFormContainer>
					<EmailFormTitle>
						<EmailFormTitleText>
							Obtenez des mises à jour régulières de
						</EmailFormTitleText>
					</EmailFormTitle>
					<EmailFormLogo>
						<EmailFormLogoText>{companyNameText}</EmailFormLogoText>
					</EmailFormLogo>
					<EmailForm />
				</EmailFormContainer>
			</EmailSectionGlobalContainer>
		</MarginContainer>
	</EmailSection>
);

export default Email;
