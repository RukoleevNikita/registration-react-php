import React, { useRef } from 'react';
import axios from 'axios';
import cls from './Registration.module.css';

const URL_REGISTRATION = 'http://registration-react-php/registration.php';

const eventRegistration = async (url, data) => {
    await axios.post(url, data)
        .then(res => {
            console.log(res.data);
        })
        .catch(err => console.log(err));
}

function Registration() {

    const refEmail = useRef(null),
          refPass = useRef(null),
          refRepeatPass = useRef(null),
          refPhone = useRef(null),
          refName = useRef(null),
          refCity = useRef(null);

    const clickHandlerRegistration = (e) => {
        // const data = {
            // 'email' : refEmail.current.value,
        //     'pass' : refPass.current.value,
        //     'phone' : refPhone.current.value,
        //     'city' : refCity.current.value,
        // }
        e.preventDefault();
        const email = refEmail.current.value,
              pass = refPass.current.value,
              repeatPass = refRepeatPass.current.value,
              phone = refPhone.current.value,
              name = refName.current.value,
              city = refCity.current.value;
        
        // ! доработать
        let dataRegistration = new FormData();
        dataRegistration.append('email', email);
        dataRegistration.append('pass', pass);
        dataRegistration.append('repeatPass', repeatPass);
        dataRegistration.append('phone', phone);
        dataRegistration.append('city', city);
        dataRegistration.append('name', name);

        eventRegistration(URL_REGISTRATION, dataRegistration)
        
        // const url = "http://registration-react-php/registration.php";
        // axios.post(url, formData)
        //     .then(res => {
        //        console.log(res.data);
        //     })
        //     .catch(err => console.log(err));
    }

    return (
        <div className={cls.blockForm}>
            <form className={cls.form}>
                <h3>Регистрация</h3>
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
                        placeholder="Ваше имя" 
                        ref={refName}
                    />
                </div>

                <div className={cls.formGrup}>
                    <input 
                        className={cls.formInput} 
                        placeholder="Номер телефона" 
                        ref={refPhone}
                    />
                </div>

                <div className={cls.formGrup}>
                    <input 
                        className={cls.formInput}
                        placeholder="Город проживания" 
                        ref={refCity}
                    />
                </div> 
                                
                <div className={cls.formGrup}>
                    <input 
                        className={cls.formInput} 
                        placeholder="Пароль" 
                        ref={refPass}
                    />
                </div>

                <div className={cls.formGrup}>
                    <input 
                        className={cls.formInput} 
                        placeholder="Повторите пароль" 
                        ref={refRepeatPass}
                    />
                </div>

                <button 
                    className={cls.registrationBtn} 
                    onClick={clickHandlerRegistration}
                >
                    Регистрация</button>
            </form>
        </div>
    );
}

export default Registration;