import React, { useRef } from 'react';
import axios from 'axios';
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/userReducer";
// import { useSelector } from 'react-redux';
import cls from './Login.module.css';

const URL_LOGIN = 'http://registration-react-php/auth.php';

// const eventLogin = async (url, data) => {
//     const resp = await axios.post(url, data)
//     const objData = await resp.data;
//     return objData;
// }

const eventLogin = async (url, data) => {
    return async dispatch => {
        const resp = await axios.post(url, data)
        const objData = await resp.data;
        dispatch(setUser(objData))
        return objData;
    }
}


function Login () {

    const dispatch = useDispatch();

    // const isAuth = useSelector(state => state.user.isAuth);

    // console.log(isAuth);

    const refEmail = useRef(null),
          refPass = useRef(null);

    const clickHandlerEntry = async (e) => {
        e.preventDefault();

        let dataLogin = new FormData();
        dataLogin.append('email', refEmail.current.value);
        dataLogin.append('pass', refPass.current.value);

        // const respObj = await eventLogin(URL_LOGIN, dataLogin);

        dispatch({type: 'SET_USER'})

        // props.statusHandler(respObj.login)
    }
    
    return (
        <div className={cls.blockForm}>
            <form className={cls.form}>
                <h3>Вход</h3>
                <div className={cls.formGrup}>
                    <input 
                        className={cls.formInput} 
                        placeholder="Email" 
                        ref={refEmail}
                    />
                </div>
                
                <div className={cls.formGrup}>
                    <input 
                        className={cls.formInput} 
                        placeholder="Пароль" 
                        ref={refPass}
                    />
                </div>
                <button className={cls.loginBtn} onClick={clickHandlerEntry}>Войти</button>
            </form>
        </div>
    );
}

export default Login;