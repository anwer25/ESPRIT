import React, { useEffect, useState } from "react";
import {
	MarginContainer,
	PartnersGlobalContainer,
	PartnersSection,
} from "../../styled-components/view";
import PartnerSlide from "../widget/partner";
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
// eslint-disable-next-line import/no-unresolved
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
const Industriel: React.FC = (): JSX.Element => {
	const [data, setData] = useState<Array<object>>([]);
	useEffect(() => {
		setData([
			{ image: p1, title: "p1" },
			{ image: p2, title: "p2" },
			{ image: p3, title: "p3" },
			{ image: p4, title: "p4" },
			{ image: p5, title: "p5" },
			{ image: p6, title: "p6" },
			{ image: p7, title: "p7" },
			{ image: p8, title: "p8" },
			{ image: p9, title: "p9" },
			{ image: p10, title: "p10" },
			{ image: p11, title: "p11" },
			{ image: p12, title: "p12" },
			{ image: p13, title: "p13" },
			{ image: p14, title: "p14" },
			{ image: p15, title: "p15" },
			{ image: p16, title: "p16" },
			{ image: p17, title: "p17" },
			{ image: p18, title: "p18" },
			{ image: p19, title: "p19" },
			{ image: p20, title: "p20" },
			{ image: p21, title: "p21" },
			{ image: p22, title: "p22" },
			{ image: p23, title: "p23" },
			{ image: p24, title: "p24" },
			{ image: p25, title: "p25" },
			{ image: p26, title: "p26" },
			{ image: p27, title: "p27" },
			{ image: p28, title: "p28" },
			{ image: p29, title: "p29" },
			{ image: p30, title: "p30" },
			{ image: p31, title: "p31" },
			{ image: p32, title: "p32" },
			{ image: p33, title: "p33" },
			{ image: p34, title: "p34" },
			{ image: p35, title: "p35" },
			{ image: p36, title: "p36" },
			{ image: p37, title: "p37" },
			{ image: p38, title: "p38" },
			{ image: p39, title: "p39" },
			{ image: p40, title: "p40" },
			{ image: p41, title: "p41" },
			{ image: p42, title: "p42" },
			{ image: p43, title: "p43" },
			{ image: p44, title: "p44" },
			{ image: p45, title: "p45" },
			{ image: p46, title: "p46" },
			{ image: p47, title: "p47" },
			{ image: p48, title: "p48" },
		]);
	}, []);
	return (
		<PartnersSection>
			<MarginContainer>
				<PartnersGlobalContainer>
					<PartnerSlide image={data} />
				</PartnersGlobalContainer>
			</MarginContainer>
		</PartnersSection>
	);
};
export default Industriel;
