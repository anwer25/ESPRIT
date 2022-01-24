// eslint-disable-next-line import/extensions
import colorsName from "../colors/colors.name";

const [
	defaultCircleBorderColor,
	defaultCompanyNameColor,
	defaultCompanyBarColor,
	defaultCompanyNameArrowColor,
] = Array(4).fill(colorsName.White.hex); // for white color #fff if you add another variable don't forget to add array length

const companyNameText = "ESPRIT";
const defaultNavContainerColor = colorsName.blueBg.hex;
const defaultSecondCircleBgColor = colorsName.WhiteG.hex;
const defaultSecondCircleGradientColor = colorsName.WhiteG.gradient;

const defaultTheme = {
	navContainerColor: defaultNavContainerColor,
	cerecleBorder: defaultCircleBorderColor,
	CircleBackground: defaultSecondCircleBgColor,
	CircleGradient: defaultSecondCircleGradientColor,
	companyNameColor: defaultCompanyNameColor,
	companyBarColor: defaultCompanyBarColor,
	companyArrowColor: defaultCompanyNameArrowColor,
};

// eslint-disable-next-line import/prefer-default-export
export { companyNameText, defaultTheme };
