import React, { useState, createContext, useMemo } from "react";
import { defaultTheme } from "../utils/varibales";

export const ThemeContext = createContext({});

const UseThemeProviderComponent: React.FC = ({ children }): JSX.Element => {
	const [theme, setTheme] = useState(defaultTheme);
	const themeMemo = useMemo(() => ({ theme, setTheme }), [theme]);
	return (
		<ThemeContext.Provider value={themeMemo}>
			{children}
		</ThemeContext.Provider>
	);
};

export default UseThemeProviderComponent;
