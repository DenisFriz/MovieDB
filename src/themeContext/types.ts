export enum IThemeMode {
    DARK = "dark",
    LIGHT = "light",
}

export interface IThemeContext {
    themeMode: IThemeMode,
    toggleThemeMode: (mode: IThemeMode) => void,
}