'use client'

import React, { useState } from 'react';
import Button from '../button';
import styles from '../../styles/loginPageStyle.module.css';

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if(email.trim() && password.trim()) {
            fetch(`http://localhost:8080/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            }).then(response => {

            })
        }
    }

    return (
        <form className={`${styles.loginFormDiv} ${styles.flex}`} onSubmit={handleSubmit}>
            <div className={`${styles.loginTexts} ${styles.flex}`}>
                <input className={`${styles.loginTextInputs} ${styles.borderRadius10}`} type="text" placeholder='Email' value={email} onChange={ (event) => setEmail(event.target.value) } />
                <input className={`${styles.loginTextInputs} ${styles.borderRadius10}`} type="password" placeholder='Senha' value={password} onChange={ (event) => setPassword(event.target.value) }/>
            </div>
            <Button label='Login'/>
        </form>
    );
}
