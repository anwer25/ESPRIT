import React from "react";
import Image from "next/image";
import {
	BrComponent,
	ButtonContainer,
	ColorH1Blue,
	EmailSection,
	FormContainer,
	ImageContainer,
	InputContainer,
	PositionContainer,
} from "../../styled-components/view";

const myLoader = ({ src, width, quality }) =>
	`${src}?w=${width}&q=${quality || 75}`;

// eslint-disable-next-line no-undef
const Emailinscription: React.FC = (): JSX.Element => (
	<EmailSection>
		<div style={{ position: "relative", left: "90px", top: "100px" }}>
			<FormContainer style={{ margin: "50px" }}>
				<h1> Esprit</h1>{" "}
			</FormContainer>

			<ImageContainer>
				<Image
					loader={myLoader}
					src="./design.svg"
					alt="design"
					width={400}
					height={400}
				/>
			</ImageContainer>
			<PositionContainer>
				<ColorH1Blue>Subscribe to Newsletter </ColorH1Blue>
				<InputContainer placeholder="Email" required />
				<BrComponent />
				<ButtonContainer>Subscribe</ButtonContainer>
			</PositionContainer>
		</div>
	</EmailSection>
);

export default Emailinscription;
