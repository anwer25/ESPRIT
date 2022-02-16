import React, { useEffect, useState } from "react";
// eslint-disable-next-line import/extensions
import { CoursesGridItemsContainer } from "../../components/styled-components/view";
// eslint-disable-next-line import/extensions
import p1 from "../../public/information/partenaire/technologique/p1.jpg";
import p2 from "../../public/information/partenaire/technologique/p2.jpg";
import p3 from "../../public/information/partenaire/technologique/p3.jpg";
import p4 from "../../public/information/partenaire/technologique/p4.jpg";
import p5 from "../../public/information/partenaire/technologique/p5.png";
import p6 from "../../public/information/partenaire/technologique/p6.jpg";
import p7 from "../../public/information/partenaire/technologique/p7.jpg";
import p8 from "../../public/information/partenaire/technologique/p8.jpg";
import p9 from "../../public/information/partenaire/technologique/p9.jpg";
import p10 from "../../public/information/partenaire/technologique/p10.jpg";
import p11 from "../../public/information/partenaire/technologique/p11.jpg";
import p12 from "../../public/information/partenaire/technologique/p12.jpg";
import p13 from "../../public/information/partenaire/technologique/p13.jpg";
import p14 from "../../public/information/partenaire/technologique/p14.jpg";
import p15 from "../../public/information/partenaire/technologique/p15.jpg";
import p16 from "../../public/information/partenaire/technologique/p16.jpg";
import p17 from "../../public/information/partenaire/technologique/p17.jpg";
import p18 from "../../public/information/partenaire/technologique/p18.jpg";
import p19 from "../../public/information/partenaire/technologique/p19.jpg";
import p20 from "../../public/information/partenaire/technologique/p20.jpg";
// eslint-disable-next-line no-undef
const GridItemsP2: React.FC = (): JSX.Element => {
	// eslint-disable-next-line no-unused-vars
	const [data, setData] = useState([
		{
			image: p1,
			title: "Amazon Web Services",
		},
		{
			image: p2,
			title: "Britch Council Tunisia",
		},
		{
			image: p3,
			title: "Cenceive Design Implement Operate",
		},
		{
			image: p4,
			title: "Conférence Des Grandes Ecoles",
		},
		{ image: p5, title: "CISCO" },

		{
			image: p6,
			title: "CVTRUST",
		},
		{
			image: p7,
			title: "Dellemc",
		},
		{
			image: p8,
			title: "Google",
		},
		{
			image: p9,
			title: "Hesso",
		},
		{
			image: p10,
			title: "IBM",
		},
		{
			image: p11,
			title: "Intel France",
		},
		{
			image: p12,
			title: "ITU",
		},
		{
			image: p13,
			title: "KNX",
		},
		{
			image: p14,
			title: "Mercy Corps",
		},
		{
			image: p15,
			title: "Microsoft office 365",
		},
		{
			image: p16,
			title: "PECB",
		},
		{
			image: p17,
			title: "SAP",
		},
		{
			image: p18,
			title: "Assurances STAR",
		},
		{
			image: p19,
			title: "United Nations Educational Organization",
		},
		{ image: p20, title: "Vm" },
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
				<GridItemsP2 data={value} key={index} />
			))}
		</CoursesGridItemsContainer>
	);
};
export default GridItemsP2;
