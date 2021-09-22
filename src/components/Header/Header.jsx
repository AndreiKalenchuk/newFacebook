import React from 'react';
import css from './Header.module.css';
import logo from '../../logo.svg';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={css.header}>
            <img src={logo}/>
            <div className={css.loginBlock}>
                {props.auth.isAuth
                    ? <div>{props.auth.login} <button onClick={props.logout}>log out </button> </div>
                    : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    )
}

export default Header;