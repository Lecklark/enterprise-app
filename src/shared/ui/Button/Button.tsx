import {ButtonHTMLAttributes, FC} from 'react';
import {classNames} from "shared/lib/classNames";
import styles from './Button.module.scss';

export enum EThemeButton {
    CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: EThemeButton;
}

export const Button:FC<ButtonProps> =
    ({
        className,
        children,
        theme = EThemeButton.CLEAR,
        ...rest
    }) => {
    return (
        <button
            className={classNames(styles.Button, {},[className, styles[theme]])}
            {...rest}
        >
            {children}
        </button>
    );
};