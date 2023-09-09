import { FC } from 'react';
import { classNames } from 'shared/lib/classNames';
import { Link, LinkProps } from 'react-router-dom';
import styles from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme
}

export const AppLink:FC<AppLinkProps> = ({
    className, children, theme = AppLinkTheme.PRIMARY, ...rest
}) => (
    <Link className={classNames(styles.AppLink, {}, [className, styles[theme]])} {...rest}>
        {children}
    </Link>
);
