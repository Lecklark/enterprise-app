import {FC, useMemo, useState} from "react";
import {ETheme, LOCAL_STORAGE_THEME_KEY, ThemeContext} from "shared/config/theme";

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