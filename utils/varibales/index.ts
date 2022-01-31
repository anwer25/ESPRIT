// eslint-disable-next-line import/extensions
import colorsName from "../colors";

const companyNameText = "ESPRIT";
const CoursesTitleText = "Meilleurs cours";
const links = {
	instagrame: "https://www.instagram.com",
	facebook: "https://www.facebook.com",
	twitter: "https://twitter.com/",
};
const partnersLink = [
	{ name: "test1", link: "www.test1.tn" },
	{ name: "test2", link: "www.test2.tn" },
	{ name: "test3", link: "www.test3.tn" },
	{ name: "test4", link: "www.test4.tn" },
	{ name: "test5", link: "www.test5.tn" },
];

const ContactUs = [
	{ name: "test1", link: "www.test1.tn" },
	{ name: "test2", link: "www.test2.tn" },
	{ name: "test3", link: "www.test3.tn" },
	{ name: "test4", link: "www.test4.tn" },
	{ name: "test5", link: "www.test5.tn" },
];

const fonts = {
	companyName: {
		Lora: {
			url: `https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;1,500&display=swap`,
			fontFamily: `Lora serif`,
		},
	},
	coursesTitle: {
		SourceSerif: {
			url: `https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,wght@1,600&display=swap`,
			fontFamily: `Source Serif 4', sans-serif`,
		},
	},
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
	defaultFooterTextCopyRightColor,
] = Array(9).fill(colorsName.White.hex); // for white color #fff if you add another variable don't forget to add array length

const [
	defaultNavContainerColor,
	defaultSearchSVGColor,
	defaultSearchInputBorderColorHover,
	defaultCoursesTitleColor,
	defaultCoursesCardTitelColor,
	defaultCoursesCardSubTitlelColor,
	defaultExploreContainerColor,
	defaultEmailFormTitleTextColor,
	defaultEmailFormLogo,
	defaultEmailInputBorderColor,
	defaultEmailInputFocusColor,
	defaultEmailButtonBgColor,
] = Array(14).fill(colorsName.blueBg.hex);

const [defaultSecondCircleGradientColor] = Array(1).fill(
	colorsName.WhiteG.gradient
);

const defaultFooterInfoBgColor = colorsName.DarkGray.hex;

const [
	defaultInstaColor,
	defaultfacebookColor,
	defaultTwitterColor,
	defaultFooterCopyRightBgColor,
] = Array(4).fill(colorsName.DarkPurple.hex);

const [defaultInstaOpacity, defaultFacebookOpacity, defaultTwitterOpacity] =
	Array(3).fill("1");

const defaultSecondCircleBgColor = colorsName.WhiteG.hex;
const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

const [defaultExploreItemContainerColor, defaultStudentReviewTitleColor] =
	Array(1).fill("#2357BF");
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
	coursesTitleColor: defaultCoursesTitleColor,
	coursesCardTitelColor: defaultCoursesCardTitelColor,
	coursesCardSubTitlelColor: defaultCoursesCardSubTitlelColor,
	exploreContainerColor: defaultExploreContainerColor,
	exploreItemContainerColor: defaultExploreItemContainerColor,
	studentReviewTitleColor: defaultStudentReviewTitleColor,
	emailFormTitleTextColor: defaultEmailFormTitleTextColor,
	emailFormLogo: defaultEmailFormLogo,
	emailInputBorderColor: defaultEmailInputBorderColor,
	emailInputFocusColor: defaultEmailInputFocusColor,
	emailButtonBgColor: defaultEmailButtonBgColor,
	footerInfoBgColor: defaultFooterInfoBgColor,
	footerCopyRightBgColor: defaultFooterCopyRightBgColor,
	footerTextCopyRightColor: defaultFooterTextCopyRightColor,
};

// eslint-disable-next-line import/prefer-default-export
export {
	companyNameText,
	defaultTheme,
	colors,
	links,
	CoursesTitleText,
	fonts,
	partnersLink,
	ContactUs,
};
