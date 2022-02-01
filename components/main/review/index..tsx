import React, { useEffect, useState } from "react";
import {
	MarginContainer,
	StudentReviewContainer,
	StudentReviewGlobalContainer,
	StudentReviewTitleContainer,
} from "../../styled-components/view";
import { StudentReviewTitle } from "../../styled-components/text";
import st from "../../../public/pexels-thisisengineering-3861964.jpg";
import dat from "../../../public/pexels-ola-dapo-3345882.jpg";
import rs from "../../../public/pexels-sound-on-3756879.jpg";
import Slider from "../widget/review/slider";

// eslint-disable-next-line no-undef
const StudentReview: React.FC = (): JSX.Element => {
	const [reviewData, setRevieData] = useState<Array<object>>([]);
	useEffect(() => {
		console.log("hi form slider");
		setRevieData([
			{
				image: st,
				name: "Emillie Jonas",
				title: "England",
				paragraph:
					"simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's " +
					"standard dummy text ever since the 1500s",
			},

			{
				image: dat,
				name: "Emillie Jonas 2",
				title: "England",
				paragraph:
					"simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's " +
					"standard dummy text ever since the 1500s",
			},

			{
				image: rs,
				name: "Emillie Jonas 3",
				title: "England",
				paragraph:
					"simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's " +
					"standard dummy text ever since the 1500s",
			},
		]);
	}, []);
	return (
		<StudentReviewGlobalContainer>
			<MarginContainer>
				<StudentReviewContainer>
					<StudentReviewTitleContainer>
						<StudentReviewTitle>
							Examen des étudiants
						</StudentReviewTitle>
					</StudentReviewTitleContainer>
					<Slider reviews={reviewData} />
				</StudentReviewContainer>
			</MarginContainer>
		</StudentReviewGlobalContainer>
	);
};

export default StudentReview;
