import "../styles/globals.css";
import type { AppProps } from "next/app";
import UseThemeProviderComponent from "../hooks/theme";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<UseThemeProviderComponent>
			<Component {...pageProps} />
		</UseThemeProviderComponent>
	);
}

export default MyApp;
