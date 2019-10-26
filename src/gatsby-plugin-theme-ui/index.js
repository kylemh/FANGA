import { deep } from "@theme-ui/presets";

export default {
  initialColorModeName: "default",
  ...deep,
  colors: {
    // Doing modes enables global styles being applied
    modes: {
      default: {
        ...deep.colors,
        primary: "#32D8D6",
        background: "#32D8D6",
      },
      dark: {
        ...deep.colors,
        primary: "#32D8D6",
        background: "#32D8D6",
      },
    },
  },
  fonts: {
    body: "Open Sans, Helvetica, sans-serif",
    heading: "Avenir, sans-serif",
    monospace: "Menlo, monospace",
  },
  fontSizes: [14, 16, 18, 24, 36, 48, 100],
};
