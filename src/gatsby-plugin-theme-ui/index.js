import nightOwl from "@theme-ui/prism/presets/night-owl";
// Create a theme object to include custom color, typography, and layout values.
// Customize: https://theme-ui.com/customize
export default {
  initialColorMode: "default",
  useCustomProperties: true,
  breakpoints: ["600px", "900px", "1200px"],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  sizes: {
    width: "90vw",
    maxWidth: "1100px"
  },
  fonts: {
    body: "system-ui, sans-serif",
    heading: "inherit",
    monospace: "Menlo, monospace"
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125
  },
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#07c",
    secondary: "#30c",
    muted: "#f6f6f6",
    modes: {
      dark: {
        text: "#fff",
        background: "#060606",
        primary: "#3cf",
        secondary: "#e0f",
        muted: "#191919",
        highlight: "#29112c",
        gray: "#999",
        accent: "#c0f"
      },
      deep: {
        text: "#f0f5fa",
        background: "#222639",
        primary: "#b9f",
        secondary: "#e9f",
        highlight: "#5f527a",
        accent: "#e9f",
        muted: "#0003",
        gray: "#69c"
      },
      swiss: {
        text: "#3d2c29",
        background: "#fafaf9",
        primary: "#e63b19",
        secondary: "#cc4d33",
        highlight: "#f0dfdb",
        accent: "#2e1f7a",
        muted: "#f3eeed",
        gray: "#996f66"
      }
    }
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body"
    },
    h1: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "1.2",
      fontWeight: "heading",
      fontSize: 5
    },
    h2: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "1.2",
      fontWeight: "heading",
      fontSize: 4
    },
    h3: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "1.2",
      fontWeight: "heading",
      fontSize: 3
    },
    h4: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "1.2",
      fontWeight: "heading",
      fontSize: 2
    },
    h5: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "1.2",
      fontWeight: "heading",
      fontSize: 1
    },
    h6: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "1.2",
      fontWeight: "heading",
      fontSize: 0
    },
    p: {
      color: "text",
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body"
    },
    a: {
      color: "primary"
    },
    pre: {
      ...nightOwl
    },
    code: {
      fontFamily: "monospace",
      fontSize: "inherit"
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0
    },
    th: {
      textAlign: "left",
      borderBottomStyle: "solid"
    },
    td: {
      textAlign: "left",
      borderBottomStyle: "solid"
    },
    img: {
      maxWidth: "100%"
    },
    Layout: {
      fontFamily: "body",
      fontSize: 1,
      lineHeight: "body"
    }
  },
  layout: {
    header: {
      color: "text",
      backgroundColor: "muted"
    },
    footer: {
      color: "text",
      backgroundColor: "muted"
    }
  },
  buttons: {
    primary: {
      color: "background",
      bg: "primary"
    },
    secondary: {
      color: "primary",
      bg: "secondary"
    }
  }
};
