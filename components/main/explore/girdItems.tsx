import React, { useEffect, useState } from "react";
import carbon from "../../../public/carbon_math-curve.svg";
import frame11 from "../../../public/Frame11.svg";
import frame32 from "../../../public/Frame32.svg";
import frame34 from "../../../public/Frame33.svg";
import frame35 from "../../../public/Group.svg";
import frame36 from "../../../public/Group32.svg";
import frame37 from "../../../public/Group33.svg";
import frame38 from "../../../public/la_business-time.svg";
import ExploreGridItem from "../widget/explore/gridItem";

// eslint-disable-next-line no-undef
const GirdItems: React.FC = (): JSX.Element => {
	const [data, setData] = useState<Array<object>>([]);
	useEffect(() => {
		console.log("hello");
		setData([
			{ image: frame32, title: "Business & Management" },
			{ image: frame34, title: "Language" },
			{ image: frame35, title: "Infotmation Technology" },
			{ image: frame37, title: "Film & media" },
			{ image: frame38, title: "Math & Logic" },
			{ image: frame36, title: "Helth & Medical" },
			{ image: frame11, title: "Design & Creative" },
			{ image: carbon, title: "data Science" },
		]);
	}, []);

	// @ts-ignore
	return <ExploreGridItem data={data} />;
};

export default GirdItems;
