import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';

export enum EAppRoutes {
    MAIN = 'main',
    ABOUT = 'about'
}

export const routePaths: Record<EAppRoutes, string> = {
    [EAppRoutes.MAIN]: '/',
    [EAppRoutes.ABOUT]: '/about',
};

export const routeConfig: Record<EAppRoutes, RouteProps> = {
    [EAppRoutes.MAIN]: {
        path: routePaths.main,
        element: <MainPage />,
    },
    [EAppRoutes.ABOUT]: {
        path: routePaths.about,
        element: <AboutPage />,
    },
};
