import React, { useEffect, useState } from "react";
// eslint-disable-next-line import/extensions
import { CoursesGridItemsContainer } from "../../styled-components/view";
// eslint-disable-next-line import/extensions
import GridItem from "../widget/courses/gride";
import architect from "../../../public/architect.jpg";
import uml from "../../../public/uml.jpg";
import security from "../../../public/secure.png";
import sql from "../../../public/sql.jpg";
import iot from "../../../public/iot.png";
import sid from "../../../public/decision.jpg";
import server from "../../../public/web_server.jpg";
import client from "../../../public/web_client.jpg";

// eslint-disable-next-line no-undef
const GridItems: React.FC = (): JSX.Element => {
	// eslint-disable-next-line no-unused-vars
	const [data, setData] = useState([
		{
			image: architect,
			title: "Architecture logicielle et conception avancée",
			subTitle: "Développer un modéle Architectural",
		},
		{
			image: uml,
			title: "UML",
			subTitle: "Modéliser une application avec UML de A à Z",
		},
		{
			image: security,
			title: "Sécurité",
			subTitle:
				"Les stratégies de sécurité et les systèmes de protection ",
		},
		{
			image: sql,
			title: "Administration SQL Server ",
			subTitle: " generating DataBase ",
		},
		{ image: iot, title: "IOT", subTitle: "Internet of things" },
		{
			image: sid,
			title: "Système interactif d'aide à la décision",
			subTitle:
				"Mémoire d’ingénieur de conception en génie informatique Zafack Takadong Thibaut ENSP",
		},
		{
			image: server,
			title: "Programmation web avancée côté Serveur",
			subTitle: "PHP, PDO, MVC, DAL, Controller de categorie PHP. ",
		},
		{
			image: client,
			title: "Programmation web avancée côté client ",
			subTitle: "HTML, PHP, ASP, JAVASCRIPT, AJAX",
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
				<GridItem data={value} key={index} />
			))}
		</CoursesGridItemsContainer>
	);
};
export default GridItems;
