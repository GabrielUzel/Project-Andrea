'use client'

import { useRouter } from 'next/navigation'
import React, { useState } from 'react';
import Button from '../../components/button';
import SeePasswordIcon from '../../components/seePasswordIcon';
import styles from '../../styles/loginPageStyle.module.css';

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [typeIsPassword, setTypeIsPassword] = useState(true);
    const router = useRouter();

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
            }).then(response => response.json()
            ).then(data => {
                if(data.token) {
                    localStorage.setItem('token', data.token);
                    router.push('/');
                }
            })
            .catch(error => {
                if(error instanceof TypeError) {
                    setErrorMessage("Houve um problema, tente novamente mais tarde");
                } else {
                    setErrorMessage("Email ou senha inválidos");
                }
            });
        }
    }

    const removeErrorMessage = () => {
        setErrorMessage('');
    }

    const changeTypeIsPassword = () => {
        setTypeIsPassword(!typeIsPassword);
    }

    return (
        <div className={styles.loginFormMainDiv}>
            <div className={styles.errorMessage} style={{visibility: errorMessage ? 'visible' : "hidden"}}>
                <p>
                    {errorMessage}
                </p>
            </div>

            <form className={`${styles.loginFormDiv} ${styles.flex}`} onSubmit={handleSubmit}>
                <div className={`${styles.loginTexts} ${styles.flex}`}>
                    <input className={`${styles.loginTextInputs} ${styles.borderRadius10}`}
                        type='text'
                        placeholder='Email'
                        value={email}
                        onChange={ (event) => {
                            setEmail(event.target.value);
                            removeErrorMessage();
                        }}
                    />
                    <div>
                        <input className={`${styles.loginTextInputs} ${styles.borderRadius10}`}
                            type={typeIsPassword ? 'password' : 'text'}
                            placeholder='Senha'
                            value={password}
                            onChange={ (event) => {
                                setPassword(event.target.value);
                                removeErrorMessage();
                            }}
                        />
                        <SeePasswordIcon changeTypeIsPassword={changeTypeIsPassword}/>
                    </div>
                </div>
                <Button label='Login'/>
            </form>
        </div>
    );
}
