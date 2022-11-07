import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import MoonImage from "./images/QuietMoon.jpg"
import {Container, Box} from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "./css/style.css"

function App() {
  // const classes = useStyles();
  const theme = createTheme();
  return (
    <div className="page">
      <PortfolioContainer/>
    </div>
  );
}

export default App;



