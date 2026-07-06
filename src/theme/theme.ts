import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  direction: "ltr",
  palette: {
    mode: "light",
    primary: {
      main: "#012b69",
      light: "#5f98ee",
      dark: "#012b69",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#012b69",
      light: "#2c589c",
      dark: "#011027",
      contrastText: "#ffffff",
    },
    background: {
      default: "#ECF0F7",
      paper: "#ffffff",
    },
    text: {
      primary: "#171717",
      secondary: "#525252",
    },
    divider: "rgba(23, 23, 23, 0.1)",

    success: {
      main: "#15803d",
    },
    warning: {
      main: "#b45309",
    },
    error: {
      main: "#b91c1c",
    },
    info: {
      main: "#0369a1",
    },
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    fontFamily: "var(--font-site)",
    h1: {
      fontWeight: 950,
      lineHeight: 1.15,
    },
    h2: {
      fontWeight: 900,
      lineHeight: 1.25,
    },
    h3: {
      fontWeight: 900,
      lineHeight: 1.35,
    },
    body1: {
      lineHeight: 1.9,
    },
    body2: {
      lineHeight: 1.8,
    },
    button: {
      fontWeight: 700,
      textTransform: "none",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background:
            "linear-gradient(90deg, #fbfbfb 0%, #e7e7e7 25%, #f6f6f6 50%, #e7e7e7 75%, #ffffff 100%)",
          color: "#171717",
        },
        a: {
          color: "inherit",
          textDecoration: "none",
        },
        "::selection": {
          backgroundColor: "#012b69",
          color: "#ffffff",
          borderRadius: 4,
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 8,
          minHeight: 44,
        },
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
        outlined: {
          borderColor: "rgba(23, 23, 23, 0.1)",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 700,
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: "lg",
      },
    },
  },
});
