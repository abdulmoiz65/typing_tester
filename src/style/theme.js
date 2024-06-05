const lightTheme = {
  label: "Light",
  background: "#F5F5F5",
  text: "#000000",
  gradient: "linear-gradient(315deg, #74ebd5 0%, #ACB6E5 94%)",
  title: "#2979ff",
  textTypeBox: "#9E9E9E",
  stats: "#3D5AFE",
  fontFamily: "sans-serif",
};

const darkTheme = {
  label: "Dark",
  background: "#121212",
  text: "#FAFAFA",
  gradient: "linear-gradient(315deg, #F7971E 0%, #FFD200 94%)",
  title: "#ffc107",
  textTypeBox: "#706d6d",
  stats: "#BB86FC",
  fontFamily: "sans-serif",
};

const terminalTheme = {
  label: "Terminal",
  background: "#0D0208",
  text: "#39ff14",
  gradient: "linear-gradient(315deg, #39ff14 0%, #008F11 94%)",
  title: "#008F11",
  textTypeBox: "#706d6d",
  stats: "#39ff14",
  fontFamily: "Tomorrow",
};


const defaultTheme = darkTheme;

const themesOptions = [
  { value: darkTheme, label: "Dark" },
  { value: terminalTheme, label: "Terminal" },
  { value: lightTheme, label: "Light" },
 
];

export {
  lightTheme,
  darkTheme,
  terminalTheme,
  defaultTheme,
  themesOptions,
 
};
