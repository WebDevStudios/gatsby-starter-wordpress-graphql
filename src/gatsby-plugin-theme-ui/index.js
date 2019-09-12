// Create a theme object to include custom color, typography, and layout values.
// Customize: https://theme-ui.com/customize
export default {
  initialColorMode: "light",
  useCustomProperties: true,
  breakpoints: ["600px", "900px", "1200px"],
  space: [0, 4, 8, 16, 32],
  fonts: {
    body: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif"
  },
  fontSizes: [16, 18, 20, 22, 27, 36],
  lineHeights: {
    body: 1.45,
    heading: 1.1
  },
  colors: {
    gray: ["#efefef", "#ddd", "#333", "#111"],
    background: "#fff",
    primary: "#663399",
    secondary: "#f1f1f1",
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
  sizes: {
    default: "90vw",
    max: "1100px"
  },
  styles: {
    Layout: {
      color: "gray.2",
      fontFamily: "body",
      fontSize: 1,
      lineHeight: "body"
    },
    Header: {
      backgroundColor: "primary",
      color: "background",
      fontWeight: "bold",
      margin: "0 auto",
      maxWidth: "max",
      padding: 3,
      width: "default",
      a: {
        color: "inherit"
      }
    },
    Main: {
      margin: "0 auto",
      maxWidth: "max",
      width: "default"
    },
    Container: {
      padding: 3
    },
    Footer: {
      backgroundColor: "primary",
      color: "background",
      fontWeight: "bold",
      margin: "0 auto",
      maxWidth: "max",
      padding: 3,
      width: "default",
      a: {
        color: "inherit"
      }
    },
    h1: {
      color: "gray.3",
      fontSize: 5,
      fontWeight: "bold",
      lineHeight: "heading",
      margin: "1rem 0 0"
    },
    ul: {
      borderTop: "1px solid",
      borderColor: "gray.0",
      listStyle: "none",
      padding: 0
    },
    li: {
      borderBottom: "1px solid",
      borderColor: "gray.1",
      padding: 2,
      "&:focus-within,&:hover": {
        backgroundColor: "gray.0"
      }
    }
  }
};
