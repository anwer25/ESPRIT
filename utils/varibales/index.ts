// eslint-disable-next-line import/extensions
import colorsName from "../colors";

const companyNameText = "ESPRIT";
const links = {
	instagrame: "https://www.instagram.com",
	facebook: "https://www.facebook.com",
	twitter: "https://twitter.com/",
};

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

const [defaultInstaColor, defaultfacebookColor, defaultTwitterColor] = Array(
	3
).fill(colorsName.DarkPurple.hex);

const [defaultInstaOpacity, defaultFacebookOpacity, defaultTwitterOpacity] =
	Array(3).fill("1");

const defaultSecondCircleBgColor = colorsName.WhiteG.hex;
const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

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
	instaColor: defaultInstaColor,
	facebookColor: defaultfacebookColor,
	twitterColor: defaultTwitterColor,
	instaOpacity: defaultInstaOpacity,
	facebookOpacity: defaultFacebookOpacity,
	twitterOpacity: defaultTwitterOpacity,
};

// eslint-disable-next-line import/prefer-default-export
export { companyNameText, defaultTheme, colors, links };
