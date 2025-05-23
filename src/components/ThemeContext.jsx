// src/theme/ThemeContext.jsx
import React, { createContext, useMemo, useState, useContext } from "react";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const ThemeContext = createContext();

export const useThemeMode = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: "#3f51b5",
          },
          secondary: {
            main: "#f50057",
          },
          background: {
            default: mode === "light" ? "#ffffff" : "#121212",
            paper: mode === "light" ? "#f5f5f5" : "#1e1e1e",
          },
          text: {
            primary: mode === "light" ? "#000000" : "#ffffff",
            secondary: mode === "light" ? "#6c757d" : "#b0bec5",
          },
        },
      }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={{ toggleMode, mode }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
