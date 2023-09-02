import React, {FC} from 'react';
import {routePaths} from "shared/config/routerConfig";
import {classNames} from "shared/lib/classNames";
import styles from './Navbar.module.scss';
import {AppLink, AppLinkTheme} from "shared/ui/AppLink";

interface NavbarProps {
    className?: string;
}

export const Navbar:FC<NavbarProps> = ({className}) => {
    return (
        <div className={classNames(styles.Navbar, {},[className])}>
            <div className={styles.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} className={styles.link} to={routePaths.main}>Main</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} className={styles.link} to={routePaths.about}>About</AppLink>
            </div>
        </div>
    );
};