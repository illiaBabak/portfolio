import { isString } from './guards';

export const getCurrentTheme = (): 'light' | 'dark' => {
  const localStorageData = localStorage.getItem('portfolio_theme');
  const parsedThemeData: unknown = localStorageData
    ? JSON.parse(localStorageData)
    : null;

  const theme =
    (isString(parsedThemeData) && parsedThemeData === 'light') ||
    parsedThemeData === 'dark'
      ? parsedThemeData
      : 'light';

  return theme;
};
