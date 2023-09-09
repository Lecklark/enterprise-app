import { type FC, Suspense } from 'react';
import './styles/index.scss';

import { classNames } from 'shared/lib/classNames';
import { useTheme } from 'shared/config/theme';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/NavBar';
import { Sidebar } from 'widgets/SideBar';

export const App: FC = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};
