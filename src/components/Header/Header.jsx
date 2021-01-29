import React from 'react';
import css from './Header.module.css';
import logo from '../../logo.svg';

const Header = () => {
    return (
        <header className={css.header}>
            <img src={logo}/>
        </header>
    )
}
export default Header;