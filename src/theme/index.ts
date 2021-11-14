export type ThemeClasses = "colors" | "spacing";

export const theme: Theme = {
    colors: {
        accents: {
            light: "#6BACAF",
            dark: "#685C97",
        },
        shades: {
            light: "#6BACAF",
            dark: "#143642",
        },
        brand: "#26DBF0",
        background: {
            darkOnLight: "#F7F7F7",
            lightOnDark: "#143642"
        },
        text: {
            darkOnLight: "#143642",
            lightOnDark: "#F7F7F7",
        },
    },
    spacing: {
        main: 8,
    },
};

export interface Accents {
    light: string;
    dark: string;
}

export interface Shades {
    light: string;
    dark: string;
}

export type Brand = string;

export interface Background {
    darkOnLight: string;
    lightOnDark: string;
}

export interface Text {
    darkOnLight: string;
    lightOnDark: string;
}

export  interface Colors {
    accents: Accents;
    shades: Shades;
    brand: Brand;
    background: Background;
    text: Text;
}

export interface Spacing {
    main: number;
}

export interface Theme {
    colors: Colors,
    spacing: Spacing
};

export default Theme;
