import { createContext } from 'react';
import { type IThemeContextProps } from './types';

export const ThemeContext = createContext<IThemeContextProps>({});
export const LOCAL_STORAGE_THEME_KEY = 'theme';
