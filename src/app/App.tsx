import {FC} from "react";
import './styles/index.scss';

import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "shared/config/theme";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/NavBar";

export const App: FC = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <AppRouter />
            <button onClick={toggleTheme}>Toggle theme</button>
        </div>
    );
}