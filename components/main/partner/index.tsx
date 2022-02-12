import React, { useEffect, useState } from "react";
import {
	MarginContainer,
	PartnersGlobalContainer,
	PartnersSection,
} from "../../styled-components/view";
import PartnerSlide from "../widget/partner";
import p1 from "../../../public/information/partenaire/academique/2ieSite_logo-4747.png";
import p2 from "../../../public/information/partenaire/academique/p2.jpg";
import p3 from "../../../public/information/partenaire/academique/p3.png";
import p4 from "../../../public/information/partenaire/academique/p4.jpg";
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

const Partner: React.FC = (): JSX.Element => {
	const [data, setData] = useState<Array<object>>([]);
	useEffect(() => {
		console.log("hello");
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

export default Partner;
