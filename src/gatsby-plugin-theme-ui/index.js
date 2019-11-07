import { deep } from "@theme-ui/presets";

const primaryColor = "#007BBD";
const primaryTransition = "all 0.3s linear";

export default {
  useColorSchemeMediaQuery: false,
  ...deep,
  colors: {
    // Doing modes enables global styles being applied
    modes: {
      default: {
        ...deep.colors,
        primary: primaryColor,
        background: primaryColor,
      },
      dark: {
        ...deep.colors,
        primary: primaryColor,
        background: primaryColor,
      },
    },
  },
  fonts: {
    body: "Open Sans, Helvetica, sans-serif",
    heading: "Avenir, sans-serif",
    monospace: "Menlo, monospace",
  },
  fontSizes: [14, 16, 18, 24, 36, 48, 72, 100],
  buttons: {
    primary: {
      bg: "text",
      borderColor: "background",
      borderStyle: "solid",
      borderWidth: "2px",
      color: "background",
      fill: "background",
      transition: primaryTransition,
      "&:hover": {
        borderColor: "text",
        borderStyle: "solid",
        borderWidth: "2px",
        transition: primaryTransition,
      },
    },
  },
  transitions: {
    primary: primaryTransition,
  },
};
