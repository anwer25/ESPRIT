import React, { useState } from "react";
import {
	EmailForm,
	EmailFormContainer,
	EmailFormLogo,
	EmailFormTitle,
	EmailImage,
	EmailImageContainer,
	EmailInput,
	EmailButton,
	EmailSection,
	EmailSectionGlobalContainer,
	MarginContainer,
} from "../../styled-components/view";
import {
	EmailFormLogoText,
	EmailFormTitleText,
} from "../../styled-components/text";
import { companyNameText } from "../../../utils/varibales";

// eslint-disable-next-line no-undef

const sender: Function = async (email: string): Promise<void> => {
	console.log(email);
};

// eslint-disable-next-line no-undef
const Email: React.FC = (): JSX.Element => {
	const [email, setEmail] = useState<string>("");
	return (
		<EmailSection>
			<MarginContainer>
				<EmailSectionGlobalContainer>
					<EmailImageContainer>
						<EmailImage
							src="/./email2.png"
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
							<EmailFormLogoText>
								{companyNameText}
							</EmailFormLogoText>
						</EmailFormLogo>
						<EmailForm>
							<EmailInput
								placeholder="Email"
								value={email}
								onChange={(event) =>
									setEmail(event.target.value)
								}
								onBlur={(event) => setEmail(event.target.value)}
							/>
							<EmailButton type="button" onClick={sender(email)}>
								S'abonner
							</EmailButton>
						</EmailForm>
					</EmailFormContainer>
				</EmailSectionGlobalContainer>
			</MarginContainer>
		</EmailSection>
	);
};

export default Email;
