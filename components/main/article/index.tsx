import React, { useEffect, useState } from "react";
import {
	ArticleContainer,
	ArticleGlobalContainer,
	MarginContainer,
} from "../../styled-components/view";
import Items from "../widget/article";
import p1 from "../../../public/design1.svg";
import p2 from "../../../public/design2.svg";
import p3 from "../../../public/design3.svg";

const Article: React.FC = (): JSX.Element => {
	const [test, setTest] = useState<Array<object>>([]);
	useEffect(() => {
		setTest([
			{
				image: p1,
				number: "12233",
				title: "this is title 1",
				para: "for testing : hello got to hell",
			},
			{
				image: p2,
				number: "12233",
				title: "this is title 2",
				para: "for testing : hello got to hell",
			},
			{
				image: p3,
				number: "12233",
				title: "this is title 3",
				para: "for testing : hello got to hell",
			},
		]);
	}, []);
	return (
		<ArticleGlobalContainer>
			<MarginContainer>
				<Items data={test} />
			</MarginContainer>
		</ArticleGlobalContainer>
	);
};

/* export async function getServerSideProps() {


	return {
		props: {
		data
		},
	};
} */

export default Article;
