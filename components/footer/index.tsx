import React from "react";
import {
	FooterContainer,
	BrComponent,
	DisplayContainer,
	FooterC,
	FooterColor,
	ListContainer,
} from "../styled-components/view";

const Footer: React.FC = (): JSX.Element => (
	<FooterContainer>
		<ListContainer>
			<ul>
				{" "}
				<FooterColor>
					<h1> ΣＳＰＲＩＴ</h1>
				</FooterColor>{" "}
				<DisplayContainer>
					<p>
						Esprit lors de sa création s’est donnée comme mission
						principale de former des ingénieurs « autrement ». Pour
						cela l’école a adopté dès le départ une pédagogie
						nouvelle, dynamique mettant l’élève au centre de
						l’apprentissage. L’adoption de l’APP (apprentissage par
						projet/problème) est venue renforcer cette volonté. Un
						centre d’innovation pédagogique permet la formation des
						enseignants à ces nouvelles pratiques pédagogiques qui
						s’étendent petit à petit à l’ensemble du cursus.
						L’évaluation des enseignements par les élèves contribue
						aussi à mettre ce dernier au cœur du processus
						d’apprentissage. L’élève est acteur de sa formation.
					</p>
				</DisplayContainer>
			</ul>

			<div>
				<ul>
					<h4> Esprit </h4>
					<FooterColor>
						About Affiliate Open Esprit Career News
					</FooterColor>
				</ul>
			</div>
			<div>
				<ul>
					<h4> Connect </h4>
					<FooterColor>
						Blog Contact Us
						<h4 style={{ color: "white" }}> Help Centre</h4>{" "}
						Media_Kit Donation
					</FooterColor>
				</ul>
			</div>
			<div>
				<ul>
					<h4> Legal </h4>
					<FooterColor>
						Terms of Services <BrComponent /> Pivacy Policy{" "}
						<BrComponent />
						Accessibility Trademark Sitemap
					</FooterColor>
				</ul>
			</div>
		</ListContainer>

		<FooterC> All rights Reserved @ 2022</FooterC>
	</FooterContainer>
);

export default Footer;
