import * as React from 'react';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
// import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
// We declare an object called styles that will contain a few objects for card and heading styles
// Notice that each key lists CSS styles in camel case

const styles = {
  heading: {
    background: '#212121',
    color: '#fafafa',
  },
};
// In Navbar, we can assign a style from an object by using curly braces
function Navbar() {
  return (
  <React.Fragment>
     <CssBaseline />
     <AppBar
        style= {styles.heading}
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `4px solid ${theme.palette.divider}` }}
      >
     <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h5" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Sterling Carfrae
          </Typography>
          <nav>
          <Link
              variant="button"
              style= {styles.heading}
              href="#"
              color="text.primary"
              sx={{ my: 1, mx: 1.5 }}
            >
              About Me
            </Link>
            <Link
              variant="button"
              style= {styles.heading}
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Portfolio
            </Link>
            <Link
              variant="button"
              style= {styles.heading}
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Contact Me
            </Link>
            <Link
              variant="button"
              style= {styles.heading}
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Resume
            </Link>
          </nav>
        </Toolbar>
      </AppBar>
  </React.Fragment>
  );
}

export default Navbar;