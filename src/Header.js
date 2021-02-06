import React from 'react'
// material-ui
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ForumIcon from '@material-ui/icons/Forum';

import IconButton from '@material-ui/core/IconButton';
// design
import './Header.css';

// ===HEADER FUNCTION === //
function Header() {
    return (
        <div className='header'>
            <IconButton>
                <AccountCircleIcon  fontSize="large" className="header__icon"/>
            </IconButton>
           
            <img
            className="header__logo"
            src="/hookup_logo.png"
            alt="HookUp Icon" />
            <IconButton>
                <ForumIcon fontSize="large" className="header__icon"/>
            </IconButton>
            
            
        </div>
    )
}

export default Header
