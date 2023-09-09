import {FC, useState} from 'react';
import {classNames} from "shared/lib/classNames";
import styles from './Sidebar.module.scss';
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";
import {LangSwitcher} from "shared/ui/LangSwitcher";

interface SidebarProps {
    className?: string;
}

export const Sidebar:FC<SidebarProps> = ({className}) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);

    const onToggle = () => setCollapsed(prev => !prev);

    return (
        <div className={classNames(
            styles.Sidebar,
            {[styles.collapsed]: collapsed},
            [className])}
        >
            <button onClick={onToggle}>toggle</button>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={styles.langSwitcher} />
            </div>
        </div>
    );
};