import {FC} from 'react';
import {classNames} from "shared/lib/classNames";
import styles from './ThemeSwitcher.module.scss';
import {ETheme, useTheme} from "shared/config/theme";
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import {Button, EThemeButton} from "shared/ui/Button";

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher:FC<ThemeSwitcherProps> = ({className}) => {
    const {theme, toggleTheme} = useTheme();

    return (
        <Button
            theme={EThemeButton.CLEAR}
            className={classNames(styles.ThemeSwitcher, {},[className])}
            onClick={toggleTheme}
        >
            {theme === ETheme.DARK ? <DarkIcon /> : <LightIcon /> }

        </Button>
    );
};