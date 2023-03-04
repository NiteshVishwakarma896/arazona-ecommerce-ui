import React from 'react';
import './Navbar.css';
import SearchIcon from '@mui/icons-material/Search';
import Drawer from '@mui/material/Drawer';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { headerColor } from './../../config/theme';

export default function Navbar() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  return (
    <nav className='arazona-nav' style={{backgroundColor:headerColor}}>
      <div className="arazona-nav-logo">
        <a href="#logo">Arazona.</a>
      </div>
      <div className="arazona-nav-search hidden-mobile">
        <div className="arazona-nav-search-box">
          <input type="text" placeholder='Search for products....' />
          <button><SearchIcon color='#000' /></button>
        </div>
      </div>
      <div className="arazona-nav-items">
        <a href="#cart">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.25" stroke="currentColor" className="w-4 h-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>
        </a>
        <a href="#account">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.25" stroke="currentColor" className="w-4 h-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
        </a>
        <a href="#menu" onClick={toggleDrawer('right', true)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16"  className="w-4 h-4">
          <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg>
        </a>
      </div>
      <Drawer
        style={{width:250}}
        anchor={'right'}
        open={state['right']}
        onClose={toggleDrawer('right', false)}
        color={headerColor}
      >
        <Box
          sx={{ width:'100%'}}
          role="presentation"
          onKeyDown={toggleDrawer('right', false)}
        >
          <Container maxWidth="xl" sx={{ height:'fit-content',padding:'4%' }}>
              <button onClick={toggleDrawer('right', false)} className='drawer-close-btn'>
                <i class="bi bi-x-lg"></i>
              </button>
              <div className='drawer-contents'>
                <ul>
                  <li>
                    About Us
                  </li>
                  <li>
                    Blogs
                  </li>
                  <li>
                    Team
                  </li>
                  <li>
                    How we work
                  </li>
                  <li>
                    Contact
                  </li>
                </ul>
                <p>&copy; Copyright 2023 Arazona.com</p>
              </div>
          </Container>
        </Box>
      </Drawer>
    </nav>
  )
}
