import React from "react";
import { useRouter } from "next/router";
import GlobalContainer from "../../../components/globalContainer";
import Header from "../../../components/header/header";
import UseThemeProviderComponent from "../../../hooks/theme";
// import Fetcher from "../../../lib/sender";

// export async function getServerSideProps() {
// 	const Querying = Fetcher.searchSender();
// }

const Search: React.FC = (): JSX.Element => {
	const router = useRouter();
	const { key } = router.query;
	return (
		<UseThemeProviderComponent>
			<GlobalContainer>
				<Header />
			</GlobalContainer>
		</UseThemeProviderComponent>
	);
};

export default Search;
