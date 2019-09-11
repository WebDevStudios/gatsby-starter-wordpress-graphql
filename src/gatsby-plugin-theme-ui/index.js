// Create a theme object to include custom color, typography, and layout values.
// Customize: https://theme-ui.com/customize
export default {
  initialColorMode: "light",
  useCustomProperties: true,
  breakpoints: ["300px", "900px", "1100px"],
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
    primary: "rebeccapurple",
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
        text: "hsl(210, 50%, 96%)",
        background: "hsl(230, 25%, 18%)",
        primary: "hsl(260, 100%, 80%)",
        secondary: "hsl(290, 100%, 80%)",
        highlight: "hsl(260, 20%, 40%)",
        accent: "hsl(290, 100%, 80%)",
        muted: "hsla(230, 20%, 0%, 20%)",
        gray: "hsl(210, 50%, 60%)"
      },
      swiss: {
        text: "hsl(10, 20%, 20%)",
        background: "hsl(10, 10%, 98%)",
        primary: "hsl(10, 80%, 50%)",
        secondary: "hsl(10, 60%, 50%)",
        highlight: "hsl(10, 40%, 90%)",
        accent: "hsl(250, 60%, 30%)",
        muted: "hsl(10, 20%, 94%)",
        gray: "hsl(10, 20%, 50%)"
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
