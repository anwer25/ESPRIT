import React, { useEffect, useState } from "react";
// eslint-disable-next-line import/extensions
import { CoursesGridItemsContainer } from "../../../components/styled-components/view";
// eslint-disable-next-line import/extensions
import p1 from "../../../public/information/partenaire/industriels/p1.png";
import p2 from "../../../public/information/partenaire/industriels/p2.png";
import p3 from "../../../public/information/partenaire/industriels/p3.jpg";
import p4 from "../../../public/information/partenaire/industriels/p4.jpg";
import p5 from "../../../public/information/partenaire/industriels/p5.jpg";
import p6 from "../../../public/information/partenaire/industriels/p6.png";
import p7 from "../../../public/information/partenaire/industriels/p7.jpg";
import p8 from "../../../public/information/partenaire/industriels/p8.png";
import p9 from "../../../public/information/partenaire/industriels/p9.jpg";
import p10 from "../../../public/information/partenaire/industriels/p10.jpg";
import p11 from "../../../public/information/partenaire/industriels/p11.png";
import p12 from "../../../public/information/partenaire/industriels/p12.jpg";
import p13 from "../../../public/information/partenaire/industriels/p13.jpg";
import p14 from "../../../public/information/partenaire/industriels/p14.png";
import p15 from "../../../public/information/partenaire/industriels/p15.jpg";
import p16 from "../../../public/information/partenaire/industriels/p16.jpg";
import p17 from "../../../public/information/partenaire/industriels/p17.jpg";
import p18 from "../../../public/information/partenaire/industriels/p18.jpg";
import p19 from "../../../public/information/partenaire/industriels/p19.jpg";
import p20 from "../../../public/information/partenaire/industriels/p20.jpg";
import p21 from "../../../public/information/partenaire/industriels/p21.png";
import p22 from "../../../public/information/partenaire/industriels/p22.png";
import p23 from "../../../public/information/partenaire/industriels/p23.jpg";
import p24 from "../../../public/information/partenaire/industriels/p24.png";
import p25 from "../../../public/information/partenaire/industriels/p25.jpg";
import p26 from "../../../public/information/partenaire/industriels/p26.png";
import p27 from "../../../public/information/partenaire/industriels/27.png";
import p28 from "../../../public/information/partenaire/industriels/28.png";
import p29 from "../../../public/information/partenaire/industriels/29.png";
import p30 from "../../../public/information/partenaire/industriels/30.png";
import p31 from "../../../public/information/partenaire/industriels/31.png";
import p32 from "../../../public/information/partenaire/industriels/32.png";
import p33 from "../../../public/information/partenaire/industriels/33.png";
import p34 from "../../../public/information/partenaire/industriels/34.jpg";
import p35 from "../../../public/information/partenaire/industriels/35.jpg";
import p36 from "../../../public/information/partenaire/industriels/36.jpg";
import p37 from "../../../public/information/partenaire/industriels/37.jpg";
import p38 from "../../../public/information/partenaire/industriels/38.jpg";
import p39 from "../../../public/information/partenaire/industriels/39.jpg";
import p40 from "../../../public/information/partenaire/industriels/p40.jpg";
import p41 from "../../../public/information/partenaire/industriels/p41.jpg";
import p42 from "../../../public/information/partenaire/industriels/p42.png";
import p43 from "../../../public/information/partenaire/industriels/p43.jpg";
import p44 from "../../../public/information/partenaire/industriels/p44.png";
import p45 from "../../../public/information/partenaire/industriels/p45.png";
import p46 from "../../../public/information/partenaire/industriels/p46.jpg";
import p47 from "../../../public/information/partenaire/industriels/p47.jpg";
import p48 from "../../../public/information/partenaire/industriels/p48.jpg";

// eslint-disable-next-line no-undef
const GridItemsP1: React.FC = (): JSX.Element => {
	// eslint-disable-next-line no-unused-vars
	const [data, setData] = useState([
		{
			image: p1,
			title: "Galactech Studio",
		},
		{
			image: p2,
			title: "IMH Informatique",
		},
		{
			image: p3,
			title: "Boudrant",
		},
		{
			image: p4,
			title: "Advancia",
		},
		{ image: p5, title: "Vneuron" },

		{
			image: p6,
			title: "Colmant Cuvelier",
		},
		{
			image: p7,
			title: "ADVYTEAM",
		},
		{
			image: p8,
			title: "Aptiv",
		},
		{
			image: p9,
			title: "Agence Technique Des transports Terresttres",
		},
		{
			image: p10,
			title: "Avaxia consulting",
		},
		{
			image: p11,
			title: "Be softilys",
		},
		{
			image: p12,
			title: "Centre Technique des Industries Mécanique et Electrique",
		},
		{
			image: p13,
			title: "Comité Général des Assurances",
		},
		{
			image: p14,
			title: "Wakahaw",
		},
		{
			image: p15,
			title: "Digital Berry",
		},
		{
			image: p16,
			title: "Discovery Informatique",
		},
		{
			image: p17,
			title: "Anvol Tunisie",
		},
		{
			image: p18,
			title: "EVERTEK",
		},
		{
			image: p19,
			title: "faurecia mobility",
		},
		{ image: p20, title: "HUAWEI" },
		{
			image: p21,
			title: "ILIADE consulting",
		},
		{
			image: p22,
			title: "HK",
		},
		{
			image: p23,
			title: "intelligent information systems",
		},
		{
			image: p24,
			title: "Iventu",
		},
		{
			image: p25,
			title: "LIN Agora",
		},
		{
			image: p26,
			title: "Media Net",
		},
		{
			image: p27,
			title: "Civic Drone Design",
		},
		{ image: p28, title: "SKF" },
		{
			image: p29,
			title: "COMYC code",
		},
		{
			image: p30,
			title: "Motul",
		},
		{
			image: p31,
			title: "Innovation makers SIRYOS ",
		},
		{
			image: p32,
			title: "Lyance",
		},
		{
			image: p33,
			title: "Mantu",
		},
		{
			image: p34,
			title: "Axefiance",
		},
		{
			image: p35,
			title: "NeoXam",
		},
		{ image: p36, title: "New Access" },
		{
			image: p37,
			title: "DODO Banque privée",
		},
		{
			image: p38,
			title: "Ooredoo",
		},
		{
			image: p39,
			title: "Osereso Formation",
		},
		{
			image: p40,
			title: "Qatar Mobility Innovations Center",
		},
		{
			image: p41,
			title: "SAMSUNG",
		},
		{
			image: p42,
			title: "SANDVIK Cormant",
		},
		{
			image: p43,
			title: "Sofrecom Network",
		},
		{ image: p44, title: "Technologies for Business Productivity" },
		{
			image: p45,
			title: "TIM",
		},
		{
			image: p46,
			title: "Tunisie Telecom",
		},
		{
			image: p47,
			title: "VERMEG",
		},
		{
			image: p48,
			title: "Viamobile",
		},
	]);
	useEffect(() => {}, []);
	// @ts-ignore
	// @ts-ignore
	// @ts-ignore
	return (
		<CoursesGridItemsContainer>
			{data.map((value, index) => (
				// @ts-ignore
				// eslint-disable-next-line react/no-array-index-key
				<GridItemsP1 data={value} key={index} />
			))}
		</CoursesGridItemsContainer>
	);
};
export default GridItemsP1;
