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
				number: "578",
				title: "Eminent Instructors",
				para: "Learn your favorite course with world-class instructors.",
			},
			{
				image: p2,
				number: "99981",
				title: "Happy Learners",
				para: "Learners from all around the world",
			},
			{
				image: p3,
				number: "1257",
				title: "Top Courses",
				para: "Take courses from the world's best instructors and universities.",
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
