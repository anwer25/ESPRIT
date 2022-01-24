import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import Header from "../components/header";
import GlobalContainer from "../components/globalContainer";
import UseThemeProviderComponent from "../hooks/theme";

const Index: NextPage = () => (
	<div>
		<Head>
			<title>ESPRIT</title>
			<meta name="description" content="Generated by create next app" />
		</Head>
		<UseThemeProviderComponent>
			<GlobalContainer>
				<Header />
			</GlobalContainer>
		</UseThemeProviderComponent>
	</div>
);

export default Index;
