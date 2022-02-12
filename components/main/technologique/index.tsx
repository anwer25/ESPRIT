import React, { useEffect, useState } from "react";
import {
	MarginContainer,
	PartnersGlobalContainer,
	PartnersSection,
} from "../../styled-components/view";
import PartnerSlide from "../widget/partner";
import p1 from "../../../public/information/partenaire/technologique/p1.jpg";
import p2 from "../../../public/information/partenaire/technologique/p2.jpg";
import p3 from "../../../public/information/partenaire/technologique/p3.jpg";
import p4 from "../../../public/information/partenaire/technologique/p4.jpg";
import p5 from "../../../public/information/partenaire/technologique/p5.png";
import p6 from "../../../public/information/partenaire/technologique/p6.jpg";
import p7 from "../../../public/information/partenaire/technologique/p7.jpg";
import p8 from "../../../public/information/partenaire/technologique/p8.jpg";
import p9 from "../../../public/information/partenaire/technologique/p9.jpg";
import p10 from "../../../public/information/partenaire/technologique/p10.jpg";
import p11 from "../../../public/information/partenaire/technologique/p11.jpg";
import p12 from "../../../public/information/partenaire/technologique/p12.jpg";
import p13 from "../../../public/information/partenaire/technologique/p13.jpg";
import p14 from "../../../public/information/partenaire/technologique/p14.jpg";
import p15 from "../../../public/information/partenaire/technologique/p15.jpg";
import p16 from "../../../public/information/partenaire/technologique/p16.jpg";
import p17 from "../../../public/information/partenaire/technologique/p17.jpg";
import p18 from "../../../public/information/partenaire/technologique/p18.jpg";
import p19 from "../../../public/information/partenaire/technologique/p19.jpg";
import p20 from "../../../public/information/partenaire/technologique/p20.jpg";

const Technologic: React.FC = (): JSX.Element => {
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
export default Technologic;
