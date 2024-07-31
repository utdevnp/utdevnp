"use client";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  palette: {
    mode: "light",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          color: "#000",
          border: "none",
          textTransform: "capitalize",
        },
        outlinedSecondary: {
          border: "none",
          backgroundColor: "none",
          "&:hover": {
            background: "#dedede",
            border: "none",
            textTransform: "capitalize",
          },
        },

        containedPrimary: {
          background:
            "linear-gradient(56deg, #45c4f9, #7d09ff 50.33%, #ff0be5)",
          boxShadow: "0 4px 4px 0 rgba(87, 75, 172, .15)",
          color: "#fff",
          "&:hover": {
            background:
              "linear-gradient(56deg, #45c4f9, #7d09ff 50.33%, #ff0be5)",
          },
        },
      },
    },
  },
});

export default theme;
