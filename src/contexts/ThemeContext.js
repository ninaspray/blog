import { createContext } from 'react';
import { ColourPalette } from '../styles/GlobalStyles';

export const ThemeContext = createContext('light');

export const ThemeConfig = {
    light: { background: ColourPalette.Lemon, color: ColourPalette.DarkGreen },
    dark: { background: ColourPalette.DarkGreen, color: ColourPalette.Lemon },
};