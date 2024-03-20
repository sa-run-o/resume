const pantoneLightList = {
  pantone_1: "#f2e8da",
  pantone_2: "#ffbe98",
  pantone_3: "#dcbd9e",
  pantone_4: "#efcfba",
  pantone_5: "#fa9a85",
  pantone_6: "#f97272",
  pantone_7: "#de8286",
  pantone_8: "#f9b5a9",
};
const pantoneDarkList = {
  pantone_1: "#18191a",
  pantone_2: "#242526",
  pantone_3: "#3a3b3c",
  pantone_4: "#b0b3b8",
};
const defaultPantone = {
  dark: "#18191a",
  light: "#f2f2f2",
};
export const lightTheme = {
  main: pantoneLightList.pantone_2,
  second: pantoneLightList.pantone_1,
  contrast: defaultPantone.dark,
  defaultBlack: defaultPantone.dark,
  defaultWhite: defaultPantone.light,
  // Add other light theme-specific properties here
};

export const darkTheme = {
  main: pantoneDarkList.pantone_4,
  second: pantoneDarkList.pantone_1,
  contrast: pantoneDarkList.pantone_4,
  defaultBlack: defaultPantone.dark,
  defaultWhite: defaultPantone.light,

  // Add other dark theme-specific properties here
};
