import React, { useState, createContext, useMemo } from "react";

export const ThemeContext = createContext({});

// eslint-disable-next-line no-undef
const UseThemeProviderComponent: React.FC = ({ children }): JSX.Element => {
	const [theme, setTheme] = useState({});
	const themeMemo = useMemo(() => ({ theme, setTheme }), [theme]);
	return (
		<ThemeContext.Provider value={themeMemo}>
			{children}
		</ThemeContext.Provider>
	);
};

export default UseThemeProviderComponent;
