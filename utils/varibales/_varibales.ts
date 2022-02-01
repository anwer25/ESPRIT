import colorsName from "../colors/colors.name";

const companyNameText = "ESPRIT";
const defaultNavContainerColor = colorsName.blueBg.hex;
const defaultCercleBorderColor = colorsName.White.hex;
const defaultSecondCercleBgColor = colorsName.WhiteG.hex;
const defaultSecondCercleGradientColor = colorsName.WhiteG.gradient;

const defaultTheme = {
	navContainerColor: defaultNavContainerColor,
	cerecleBorder: defaultCercleBorderColor,
	cercleBackground: defaultSecondCercleBgColor,
	cercleGradient: defaultSecondCercleGradientColor,
};

// eslint-disable-next-line import/prefer-default-export
export { companyNameText, defaultTheme };
