import { type FC } from 'react';
import { classNames } from 'shared/lib/classNames';
import { Button, EThemeButton } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import styles from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
    const { t, i18n } = useTranslation();

    const onToggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            className={classNames(styles.LangSwitcher, {}, [className])}
            theme={EThemeButton.CLEAR}
            onClick={onToggle}
        >
            {t('changeLng')}
        </Button>
    );
};
