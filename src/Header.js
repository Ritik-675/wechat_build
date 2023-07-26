import React from 'react'
import {Avatar} from "@material-ui/core";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import HelpIcon from '@mui/icons-material/Help';
// import { CSSProperties } from 'react';
import './Header.css'



function Header() {
  return (
    <div className='header'>
        <div className='header__left'>
            <Avatar className='header__avatar' alt='RITIKKKK' src=''>
          <AccessTimeIcon />
        </Avatar>
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
