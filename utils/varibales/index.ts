// eslint-disable-next-line import/extensions
import colorsName from "../colors";

const companyNameText = "ESPRIT";
const CoursesTitleText = "Meilleurs cours";
const links = {
	instagrame: "https://www.instagram.com",
	facebook: "https://www.facebook.com",
	twitter: "https://twitter.com/",
};
const ContactUSLink = [
	{ name: "Page Officiel ", link: "www.test5.tn" },
	{ name: "Adresse", link: "www.test1.tn" },
	{ name: "Social Media", link: "www.test5.tn" },
	{ name: "Tél :71 94 15 41", link: "www.test2.tn" },
	{ name: "Fax :71 94 18 89", link: "www.test3.tn" },
	{ name: "Email", link: "www.test4.tn" },
];
const VousEteslink = [
	{ name: "Condidat à une formation", link: "www.test1.tn" },
	{ name: "Condidat non Tunisien ", link: "www.test2.tn" },
	{ name: "Elève d'ESPRIT", link: "www.test3.tn" },
	{ name: "Diplômé d'ESPRIT ", link: "www.test4.tn" },
	{ name: "Parent d'élève", link: "www.test5.tn" },
	{ name: "Entreprise", link: "www.test.tn" },
];
const QuiSommeNousLink = [
	{ name: "Presentation", link: "www.test1.tn" },
	{ name: "Formation", link: "www.test2.tn" },
	{ name: "Recherche et Innovation", link: "www.test3.tn" },
	{ name: "Activité Associatives", link: "www.test4.tn" },
	{ name: "Organisation", link: "www.test5.tn" },
	{ name: "FAQ", link: "www.test5.tn" },
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
	defaultNavContainerColor,
	defaultExploreContainerColor,
	defaultFooterInfoBgColor,
	defaultArticleBgColor,
] = Array(4).fill("#696969");

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
] = Array(9).fill("#fff"); // for white color #fff if you add another variable don't forget to add array length

const [
	defaultSearchSVGColor,
	defaultSearchInputBorderColorHover,
	defaultCoursesTitleColor,
	defaultCoursesCardTitelColor,
	defaultCoursesCardSubTitlelColor,
	defaultEmailFormTitleTextColor,
	defaultEmailFormLogo,
] = Array(9).fill(colorsName.BlackW3C.hex);

const [defaultSecondCircleGradientColor] = Array(1).fill(colorsName.WhiteG.hex);

const [defaultFooterCopyRightBgColor] = Array(1).fill(colorsName.DarkGray.hex);
const [defaultInstaColor, defaultfacebookColor, defaultTwitterColo] = Array(
	3
).fill(colorsName.White.hex);

const [defaultInstaOpacity, defaultFacebookOpacity, defaultTwitterOpacity] =
	Array(3).fill("1");

const [defaultSecondCircleBgColor] = Array(1).fill(colorsName.WhiteG.hex);
const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

const [defaultStudentReviewTitleColor] = Array(1).fill("#2357BF");
const [defaultExploreItemContainerColor] = Array(1).fill(" #3a3b3c ");
const defaultTheme = {
	articleBgColor: defaultArticleBgColor,
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
	twitterColor: defaultTwitterColo,
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
	ContactUSLink,
	QuiSommeNousLink,
	VousEteslink,
};
