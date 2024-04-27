// src/components/Navbar.js
import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const linkStyle = {
    color: 'white', 
    textDecoration: 'none', 
    marginRight: '20px', 
  };
  return (
    <AppBar position="sticky" sx={{bgcolor:'#0a3e82'}}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        
        <Link to="/" style={linkStyle}>Budget Tracker</Link>
        <Link to="/stocktracker" style={linkStyle}>Stock Tracker</Link>
        <Link to="/cal" style={linkStyle}>Calculator</Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
