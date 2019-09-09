import Typography from "typography"
import { TABLET_LANDSCAPE } from "./test-breakpoints"

const typography = new Typography({
  baseFontSize: "16px",
  googleFonts: [
    {
      name: "Open Sans",
      styles: ["400"],
    },
  ],
  headerFontFamily: ["Open Sans", "serif"],
  bodyFontFamily: ["Open Sans", "serif"],
  overrideStyles: ({ rhythm }) => ({
    'h1': {
      fontSize: '32px',
    },
    'h2': {
      fontSize: '24px',
      marginBottom: rhythm(1),
    },
    'h3': {
      fontSize: '18.72px',
    },
    'h4': {
      fontSize: '18px',
    },
    'h5': {
      fontSize: '18px',
    },
    'h6': {
      fontSize: '18px',
    },
    [TABLET_LANDSCAPE]: {
      'h1': {
        fontSize: '150px',
        color: 'rebeccapurple',
      },
    }
  }), 
})
export default typography