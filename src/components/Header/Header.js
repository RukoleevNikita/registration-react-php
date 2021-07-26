import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import { logout } from "../../redux/userReducer";

import cls from './Header.module.css';

function Header () {
    const isAuth = useSelector(state => state.user.isAuth);
    const dispatch = useDispatch();

    const logout = () => {
        // e.preventDefault();

        dispatch({type: 'LOGOUT'})
    }

    return (
            <header className={cls.header}>
                <div className={cls.main}>
                    <NavLink to="/main">Главная</NavLink>
                </div>

                <div className={cls.personalAccount}>
                        {!isAuth && <NavLink className={cls.login} to="/login">Вход</NavLink>}
                        {!isAuth && <NavLink className={cls.registration} to="/registration">Регистрация</NavLink>}
                        {/* {isAuth && <NavLink onClick={dispatch(logout)}>Выход</NavLink>} */}
                        {isAuth && <div className={cls.registration} onClick={logout}>Выход</div>}
                </div>
            </header>
    );
}

export default Header;

