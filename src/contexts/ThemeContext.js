import { createContext } from 'react';
import { ColourPalette } from '../styles/GlobalStyles';

export const ThemeContext = createContext('light');

export const ThemeConfig = {
    light: { background: ColourPalette.Green, color: ColourPalette.Blossom },
    dark: { background: ColourPalette.Blossom, color: ColourPalette.Green },
};