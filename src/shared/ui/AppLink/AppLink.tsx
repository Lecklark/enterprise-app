import {FC} from 'react';
import {classNames} from "shared/lib/classNames";
import styles from './AppLink.module.scss';
import {Link, LinkProps} from "react-router-dom";

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme
}

export const AppLink:FC<AppLinkProps> = ({className, children, theme = AppLinkTheme.PRIMARY, ...rest}) => {
    return (
        <Link className={classNames(styles.AppLink, {},[className, styles[theme]])} {...rest}>
            {children}
        </Link>
    );
};