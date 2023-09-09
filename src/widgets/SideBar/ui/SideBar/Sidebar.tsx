import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import styles from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar:FC<SidebarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);

    const onToggle = () => setCollapsed((prev) => !prev);

    return (
        <div className={classNames(
            styles.Sidebar,
            { [styles.collapsed]: collapsed },
            [className],
        )}
        >
            <button type="button" onClick={onToggle}>toggle</button>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={styles.langSwitcher} />
            </div>
        </div>
    );
};
