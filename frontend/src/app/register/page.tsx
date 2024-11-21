'use client'

import React, { useState } from 'react';
import NavBar from '../../components/NavBar/navBar';
import SeePasswordIcon from '../../components/seePasswordIcon';
import Button from '../../components/button';
import ErrorMessage from '../../components/errorMessage';
import { CldUploadWidget } from 'next-cloudinary';
import Image from 'next/image';
import styles from '../../styles/registerPageStyle.module.css'

interface CloudinaryUploadInfo {
    secure_url: string;
    [key: string]: any;
}

export default function Register() {
    const [profile_picture_path, set_profile_picture_path] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [passwordState, setPasswordState] = useState(true);
    const [confirmPasswordState, setPasswordConfirmState] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if(!profile_picture_path) {
            set_profile_picture_path('#');
        }

        if(!validateForm()) {
            return;
        }

        fetch(`http://localhost:8080/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                surname: surname,
                email: email,
                password: password,
                profile_picture_path: profile_picture_path
            })
        }).then(response => response.json())
        .then(data => {
            console.log(data);
        });
    }

    const validateForm = () => {
        try {
            if(!name || !surname || !email || !password || !passwordConfirm) {
                throw 'Há campos em branco';
            }

            if(name.length > 30) {
                throw 'Nome muito grande';
            }

            if(surname.length > 30) {
                throw 'Sobrenome muito grande';
            }

            const regex = /^[A-Za-z0-9._+\-']+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$$/;
            if(!regex.test(email)) {
                throw 'Email inválido';
            }

            if(password. length < 8) {
                throw 'Senha muito curta'
            }

            if(password. length > 16) {
                throw 'Senha muito longa'
            }

            if(password !== passwordConfirm) {
                throw 'Campos da senha não coincidem';
            }

            return true;
        } catch(error) {
            setErrorMessage(error);
            return false;
        }
    }

    const removeErrorMessage = () => {
        setErrorMessage('');
    }

    const changePasswordState = () => {
        setPasswordState(!passwordState);
    }

    const changePasswordConfirmState = () => {
        setPasswordConfirmState(!confirmPasswordState);
    }

    return (
        <main className={styles.register}>
            <NavBar />
            <div>
                <form className={`${styles.registerForm} ${styles.flex}`} onSubmit={handleSubmit}>
                    <div className={`${styles.registerInputDiv} ${styles.flex}`}>

                        <CldUploadWidget
                            options={{
                                sources: ['local'],
                                multiple: false,
                            }}
                            uploadPreset="user_profile"
                            onSuccess={(result) => {
                                const info = result.info as CloudinaryUploadInfo;
                                const secure_url = info.secure_url;
                                set_profile_picture_path(secure_url);
                            }}
                        >
                            {({ open }) => {
                                return (
                                    <button className={styles.templateImageProfileButton} onClick={(event) => {
                                            event.preventDefault();
                                            open();
                                        }}>
                                        <Image
                                            src={(profile_picture_path == '#' || !profile_picture_path) ? "/img/template-profile-picture.svg" : profile_picture_path}
                                            width={200}
                                            height={200}
                                            alt="Profile image"
                                            className={styles.templateImageProfile}
                                        />
                                        Adicionar imagem de perfil
                                    </button>
                                );
                            }}
                        </CldUploadWidget>

                        <ErrorMessage errorMessage={errorMessage}/>

                        <input className={styles.registerTextInputs}
                            type='text'
                            placeholder='Nome'
                            name='name'
                            value={name}
                            autoComplete='on'
                            onChange={ (event) => {
                                setName(event.target.value);
                                removeErrorMessage();
                            }}
                        />
                        <input className={styles.registerTextInputs}
                            type='text'
                            placeholder='Sobrenome'
                            name='surname'
                            value={surname}
                            autoComplete='on'
                            onChange={ (event) => {
                                setSurname(event.target.value);
                                removeErrorMessage();
                            }}
                        />
                        <input className={styles.registerTextInputs}
                            type='text'
                            placeholder='Email'
                            name='email'
                            value={email}
                            autoComplete='on'
                            onChange={ (event) => {
                                setEmail(event.target.value);
                                removeErrorMessage();
                            }}
                        />
                        <div>
                            <input className={styles.registerTextInputs}
                                type={passwordState ? 'password' : 'text'}
                                placeholder='Senha'
                                name='password'
                                value={password}
                                onChange={ (event) => {
                                    setPassword(event.target.value);
                                    removeErrorMessage();
                                }}
                            />
                            <SeePasswordIcon changeTypeIsPassword={changePasswordState}/>
                        </div>
                        <div>
                            <input className={styles.registerTextInputs}
                                type={confirmPasswordState ? 'password' : 'text'}
                                placeholder='Confirmar senha'
                                name='passwordConfirm'
                                value={passwordConfirm}
                                onChange={ (event) => {
                                    setPasswordConfirm(event.target.value);
                                    removeErrorMessage();
                                }}
                            />
                            <SeePasswordIcon changeTypeIsPassword={changePasswordConfirmState}/>
                        </div>
                    </div>
                    <Button label='Criar conta'/>
                </form>
            </div>
        </main>
    );
}
