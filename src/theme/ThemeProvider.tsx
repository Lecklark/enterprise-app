import {ETheme, LOCAL_STORAGE_THEME_KEY, ThemeContext} from "./ThemeContext";
import {FC, useMemo, useState} from "react";

const initialTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ETheme || ETheme.LIGHT;

const ThemeProvider: FC = ({children}) => {
    const [theme, setTheme] = useState<ETheme>(initialTheme);

    const defaultProps = useMemo(() => ({
        theme: theme,
        setTheme: setTheme,
    }), [theme])

    return (
        <ThemeContext.Provider value={defaultProps} >
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider