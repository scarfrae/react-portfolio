import React, { useState } from 'react';
import About from './pages/About_me';
import Contact from './pages/Contact_me';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Navbar from './Navbar';
import {Container, Box, Typography, Link} from "@mui/material";
import '../css/style.css'

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        ReactResume
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function PortfolioContainer() {
  //updates state to tell react which page we're on 
  const [currentPage, setCurrentPage] = useState('About');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume'){
      return <Resume />;
    }
  };
  //takes in page and updates state
  const handlePageChange = (page) => setCurrentPage(page);

  return (
      <div>
        {/* We are passing the currentPage from state and the function to update it */}
        <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
        {/* Here we are calling the renderPage method which will return a component  */}
        {renderPage()}
               {/* Footer */}
    <Box sx={{ background:'	rgb(211,211,211, 0.2)', p: 2 }} component="footer">
    <Typography variant="h6" align="center" gutterBottom>
      Hope you have a wonderful day!
    </Typography>
    <Copyright />
  </Box>
  {/* End footer */}
      </div>
  );
}
