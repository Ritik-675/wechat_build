import React from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import HelpIcon from '@mui/icons-material/Help';
import Avatar from '@mui/material/Avatar';

// import { CSSProperties } from 'react';
import './Header.css'



function Header() {
  return (
    <div className='header'>
        <div className='header__left'>
            {/* <Avatar className='header__avatar' alt='RITIKKKK' src=''> */}
            {/* <Avatar src="/broken-image.jpg" /> */}
            <Avatar alt="Remy Sharp" src="" />
          <AccessTimeIcon />
        {/* </Avatar> */}
        </div>
        <div className='header__search'>
            <SearchIcon />
            <input placeholder='Search Your Query'></input>
        </div>
        <div className='header__right'>
            <HelpIcon/>
        </div>

    </div>
  )
}

export default Header
