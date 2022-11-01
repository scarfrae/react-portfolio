import React from 'react';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
// import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
// We declare an object called styles that will contain a few objects for card and heading styles
// Notice that each key lists CSS styles in camel case

const styles = {
  heading: {
    background: '#212121',
    color: '#fafafa',
  },
};
// In Navbar, we can assign a style from an object by using curly braces
function Navbar({currentPage, handlePageChange}) {
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
            <ul className="nav nav-tabs">
              <Link
                variant="button"
                color="#fafafa"
                sx={{ my: 1, mx: 1.5 }}
                href="#About"
                onClick={() => handlePageChange('About')}
                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
              >
                About Me
              </Link>
              <Link
                 variant="button"
                 color="#fafafa"
                 sx={{ my: 1, mx: 1.5 }}
                 href="#Portfolio"
                 onClick={() => handlePageChange('Portfolio')}
                  className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                >
                  Portfolio
              </Link>
              <Link
                variant="button"
                color="#fafafa"
                sx={{ my: 1, mx: 1.5 }}
                href="#Resume"
                onClick={() => handlePageChange('Contact')}
                  className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
              >
                Contact Me
              </Link>
              <Link
                variant="button"
                color="#fafafa"
                sx={{ my: 1, mx: 1.5 }}
                href="#Resume"
                onClick={() => handlePageChange('Resume')}
                  className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
              >
                Resume
              </Link>
            </ul>
          </nav>
        </Toolbar>
      </AppBar>
  </React.Fragment>
  );
}

export default Navbar;