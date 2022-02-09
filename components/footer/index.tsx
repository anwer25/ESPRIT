import React from "react";
import {
	FooterContainer,
	FooterCopyRight,
	FooterCopyRightTextContainer,
	FooterDataContainer,
	FooterInfo,
	FooterInfoContainer,
	FooterInfoLogo,
	FooterInfoText,
	FooterLinkContainer,
	LogoBar,
	MarginContainer,
} from "../styled-components/view";
import {
	CompanyName,
	CompanyNameBar,
	FooterTextCopyRight,
	FooterTextInfo,
} from "../styled-components/text";
import {
	companyNameText,
	ContactUSLink,
	QuiSommeNousLink,
	VousEteslink,
} from "../../utils/varibales";
import LinkGenerator from "./widget/Generator";

// eslint-disable-next-line no-undef
const Footer: React.FC = (): JSX.Element => (
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
								Esprit lors de sa création s’est donnée comme
								mission principale de former des ingénieurs «
								autrement ». Pour cela l’école a adopté dès le
								départ une pédagogie nouvelle, dynamique mettant
								l’élève au centre de l’apprentissage. L’adoption
								de l’APP (apprentissage par projet/problème) est
								venue renforcer cette volonté. Un centre
								d’innovation pédagogique permet la formation des
								enseignants à ces nouvelles pratiques
								pédagogiques qui s’étendent petit à petit à
								l’ensemble du cursus. L’évaluation des
								enseignements par les élèves contribue aussi à
								mettre ce dernier au cœur du processus
								d’apprentissage. L’élève est acteur de sa
								formation.
							</FooterTextInfo>
						</FooterInfoText>
						<FooterLinkContainer>
							<LinkGenerator
								links={VousEteslink}
								section="Vous etes"
							/>
							<LinkGenerator
								links={QuiSommeNousLink}
								section="Qui Somme Nous"
							/>
							<LinkGenerator
								links={ContactUSLink}
								section="Contact Us"
								// eslint-disable-next-line no-undef
							/>
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

export default Footer;
