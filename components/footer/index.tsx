import React from "react";
import {
	FooterContainer,
	FooterCopyRight,
	FooterCopyRightTextContainer,
	FooterDataContainer,
	FooterInfo,
	FooterInfoConnect,
	FooterInfoContainer,
	FooterInfoLegal,
	FooterInfoLogo,
	FooterInfoText,
	FooterLinkContainer,
	FooterPartners,
	LogoBar,
	MarginContainer,
} from "../styled-components/view";
import {
	CompanyName,
	CompanyNameBar,
	FooterTextCopyRight,
	FooterTextInfo,
} from "../styled-components/text";
import { companyNameText } from "../../utils/varibales";
import Partners from "./widget/Partners";

const Footer: React.FC = (): JSX.Element => {
	const data = "hello";
	return (
		<FooterContainer>
			<FooterInfo>
				<MarginContainer>
					<FooterInfoContainer>
						<FooterInfoLogo>
							<CompanyName>
								<CompanyNameBar>
									<LogoBar />
								</CompanyNameBar>
								{companyNameText}
							</CompanyName>
						</FooterInfoLogo>
						<FooterDataContainer>
							<FooterInfoText>
								<FooterTextInfo>
									Esprit lors de sa création s’est donnée
									comme mission principale de former des
									ingénieurs « autrement ». Pour cela l’école
									a adopté dès le départ une pédagogie
									nouvelle, dynamique mettant l’élève au
									centre de l’apprentissage. L’adoption de
									l’APP (apprentissage par projet/problème)
									est venue renforcer cette volonté. Un centre
									d’innovation pédagogique permet la formation
									des enseignants à ces nouvelles pratiques
									pédagogiques qui s’étendent petit à petit à
									l’ensemble du cursus. L’évaluation des
									enseignements par les élèves contribue aussi
									à mettre ce dernier au cœur du processus
									d’apprentissage. L’élève est acteur de sa
									formation.
								</FooterTextInfo>
							</FooterInfoText>
							<FooterLinkContainer>
								<Partners />
								<FooterInfoConnect />
								<FooterInfoLegal />
							</FooterLinkContainer>
						</FooterDataContainer>
					</FooterInfoContainer>
				</MarginContainer>
			</FooterInfo>
			<FooterCopyRight>
				<FooterCopyRightTextContainer>
					<FooterTextCopyRight>
						Copyright réservés&copy;2022
					</FooterTextCopyRight>
				</FooterCopyRightTextContainer>
			</FooterCopyRight>
		</FooterContainer>
	);
};

export default Footer;
