import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import MoonImage from "./images/QuietMoon.jpg"
import {Container, Box} from "@mui/material";

function App() {
  // const classes = useStyles();
  return (
    <Box sx={{
      backgroundImage:`url(${MoonImage})`,
    }}>

    <PortfolioContainer/>
    </Box>
  );
}

export default App;



