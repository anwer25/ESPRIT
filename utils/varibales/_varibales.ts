// eslint-disable-next-line import/extensions
import colorsName from "../colors/colors.name";

const companyNameText = "ESPRIT";

const [
	defaultCircleBorderColor,
	defaultCompanyNameColor,
	defaultCompanyBarColor,
	defaultCompanyNameArrowColor,
	defaultSearchInputBackground,
	defaultSearchInputBorderColor,
	defaultSearchButtonBorderColor,
	defaultNavLinkSVGColor,
] = Array(8).fill(colorsName.White.hex); // for white color #fff if you add another variable don't forget to add array length

const [
	defaultNavContainerColor,
	defaultSearchSVGColor,
	defaultSearchInputBorderColorHover,
] = Array(3).fill(colorsName.blueBg.hex);

const [defaultSecondCircleGradientColor] = Array(1).fill(
	colorsName.WhiteG.gradient
);

const defaultSecondCircleBgColor = colorsName.WhiteG.hex;

const defaultTheme = {
	navContainerColor: defaultNavContainerColor,
	cerecleBorder: defaultCircleBorderColor,
	CircleBackground: defaultSecondCircleBgColor,
	CircleGradient: defaultSecondCircleGradientColor,
	companyNameColor: defaultCompanyNameColor,
	companyBarColor: defaultCompanyBarColor,
	companyArrowColor: defaultCompanyNameArrowColor,
	searchInputBackground: defaultSearchInputBackground,
	searchInputBorderColor: defaultSearchInputBorderColor,
	searchButtonBorderColor: defaultSearchButtonBorderColor,
	searchSVGColor: defaultSearchSVGColor,
	searchInputBorderColorHover: defaultSearchInputBorderColorHover,
	navLinkSVGColor: defaultNavLinkSVGColor,
};

// eslint-disable-next-line import/prefer-default-export
export { companyNameText, defaultTheme };
