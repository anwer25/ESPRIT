import React, { useState } from "react";
import p1 from "../../../public/information/partenaire/academique/p1.png";
import p2 from "../../../public/information/partenaire/academique/p2.jpg";
import p3 from "../../../public/information/partenaire/academique/p3.png";
import p5 from "../../../public/information/partenaire/academique/p5.png";
import p6 from "../../../public/information/partenaire/academique/p6.jpg";
import p7 from "../../../public/information/partenaire/academique/p7.png";
import p8 from "../../../public/information/partenaire/academique/p8.jpg";
import p9 from "../../../public/information/partenaire/academique/p9.png";
import p10 from "../../../public/information/partenaire/academique/p10.jpg";
import p11 from "../../../public/information/partenaire/academique/p11.png";
import p12 from "../../../public/information/partenaire/academique/p12.png";
import p13 from "../../../public/information/partenaire/academique/p13.png";
import p14 from "../../../public/information/partenaire/academique/p14.png";
import p15 from "../../../public/information/partenaire/academique/p15.png";
import p16 from "../../../public/information/partenaire/academique/p16.png";
import p17 from "../../../public/information/partenaire/academique/p17.png";
import p18 from "../../../public/information/partenaire/academique/p18.png";
import p19 from "../../../public/information/partenaire/academique/p19.png";
import p20 from "../../../public/information/partenaire/academique/p20.png";
import p21 from "../../../public/information/partenaire/academique/p21.jpg";
import p22 from "../../../public/information/partenaire/academique/p22.png";
import p23 from "../../../public/information/partenaire/academique/p23.jpg";
import p24 from "../../../public/information/partenaire/academique/p24.jpg";
import p25 from "../../../public/information/partenaire/academique/p25.png";
import p26 from "../../../public/information/partenaire/academique/p26.jpg";
import p27 from "../../../public/information/partenaire/academique/p27.jpg";
import p28 from "../../../public/information/partenaire/academique/p28.jpeg";
import Partners from "../../../components/partners";
// eslint-disable-next-line no-undef
const Pacademique: React.FC = (): JSX.Element => {
	const [data, setData] = useState([
		{
			image: p1,
			title: " Universit?? 2iE",
		},
		{
			image: p2,
			title: "INSA euro-m??diterran??e ",
		},
		{
			image: p3,
			title: "Centre C??GEP de la pocati??re ",
		},

		{ image: p5, title: "Ecole De Mines De maurtanic" },

		{
			image: p6,
			title: "Ecole Sup??rieur Africaine Des TIC",
		},
		{
			image: p7,
			title: "universit?? EURECOM ",
		},
		{
			image: p8,
			title: "Institut National des Postes et T??l??communication",
		},
		{
			image: p9,
			title: "Ecole d'ing??nieurs du num??rique ",
		},
		{
			image: p10,
			title: "Americain Heritage College ",
		},
		{
			image: p11,
			title: "Campus D'enseignement Sup??rieur et De Formation Professionnelle",
		},
		{
			image: p12,
			title: "Ecole Mines Albi-Camaux",
		},
		{
			image: p13,
			title: "Ecole Mines Douai",
		},
		{
			image: p14,
			title: "Universit?? Pyxis",
		},
		{
			image: p15,
			title: "Universit?? Schmalkalden ",
		},
		{
			image: p16,
			title: "Lyon Business School em",
		},
		{
			image: p17,
			title: "G??GEP De Victoriaville",
		},
		{
			image: p18,
			title: "CISCO",
		},
		{
			image: p19,
			title: "Telecom Ecole de Management",
		},
		{ image: p20, title: "Technishe Hochschule Mittelhessen" },
		{
			image: p21,
			title: "University De Limoges",
		},
		{
			image: p22,
			title: "Universit?? Nice Sophia Antipolis",
		},
		{
			image: p23,
			title: "Universit?? De Sherbrooke",
		},
		{
			image: p24,
			title: "Universit?? du Maine ",
		},
		{
			image: p25,
			title: "Universit?? Paris 13",
		},
		{
			image: p26,
			title: "Universit?? Fran??aise D'??gypte",
		},
		{
			image: p27,
			title: "Universit?? M Dearoben",
		},
		{ image: p28, title: "Zayed University " },
	]);
	return <Partners data={data} />;
};

export default Pacademique;
