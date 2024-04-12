import tailwindColors from 'tailwindcss/colors';

const darkShade = 600;
const lightShade = 300;
const defaultShade = 500;
const neutralLightShade = 50;
const neutralDarkShade = 950;

export const colors = {
  neutral: tailwindColors.slate,
  brand: tailwindColors.violet,
  success: tailwindColors.teal,
  warn: tailwindColors.orange,
  danger: tailwindColors.red,
  info: tailwindColors.cyan,
};

export const getThemeColors = (color) => {
  return {
    DEFAULT: color[defaultShade],
    l: color[lightShade],
    d: color[darkShade],
    ...color,
  };
};

export const getNeutral = (shade) => {
  console.log(shade);
  return shade === 'light'
    ? colors.neutral[neutralLightShade]
    : colors.neutral[neutralDarkShade];
};
