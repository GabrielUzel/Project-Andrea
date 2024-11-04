'use client'

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/burguerMenuStyle.module.css';

export default function BurguerMenu() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [hamburguerIsOpen, setHamburguerIsOpen] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsLoggedIn(!!token);
    }, []);

    const toggleHamburguerState = () => {
        setHamburguerIsOpen(!hamburguerIsOpen);
    }

    const handleResize = () => {
        if (window.innerWidth > 824) {
            setHamburguerIsOpen(false);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <div className={styles.burguerDiv} style={{ display: hamburguerIsOpen ? 'flex' : 'none' }}>
                <Link className={styles.burguerLink} href='/'>
                    <Image
                        src="/img/home-icon.svg"
                        width={20}
                        height={20}
                        className="homeIcon"
                        alt="Home image"
                    />
                    Home
                </Link>

                {isLoggedIn ? (
                    <div>
                        <Link className={styles.burguerLink} href='/editprofile'>
                            <Image
                                src="/img/edit-profile-icon.svg"
                                width={20}
                                height={20}
                                className="editProfileIcon"
                                alt="Home image"
                            />
                            Editar perfil
                        </Link>
                        <Link className={styles.burguerLink} href='/settings'>
                            <Image
                                src="/img/settings-icon.svg"
                                width={20}
                                height={20}
                                className="settingsIcon"
                                alt="Settings image"
                            />
                            Configurações
                        </Link>
                        <Link className={styles.burguerLink} href='/shoppingcart'>
                            <Image
                                src="/img/shopping-cart-icon.svg"
                                width={20}
                                height={20}
                                className="shoppingCartIcon"
                                alt="Shopping cart image"
                            />
                            Carrinho
                        </Link>
                        <Link className={styles.burguerLink} href='/'>
                            <Image
                                src="/img/logout-icon.svg"
                                width={20}
                                height={20}
                                className="logoutIcon"
                                alt="logout image"
                            />
                            Sair
                        </Link>
                        <Link className={styles.burguerLink} href='/support'>
                            <Image
                                src="/img/support-icon.svg"
                                width={20}
                                height={20}
                                className="signupIcon"
                                alt="Support image"
                            />
                            Suporte
                        </Link>
                    </div>

                ) : (
                    <div>
                        <Link className={styles.burguerLink} href='/login'>
                            <Image
                                src="/img/login-icon.svg"
                                width={20}
                                height={20}
                                className="loginIcon"
                                alt="Login image"
                            />
                            Fazer login
                        </Link>
                        <Link className={styles.burguerLink} href='/signup'>
                            <Image
                                src="/img/register-icon.svg"
                                width={20}
                                height={20}
                                className="signupIcon"
                                alt="Signup image"
                            />
                            Cadastre-se
                        </Link>
                    </div>
                )}
            </div>

            <div className={styles.burguer} onClick={toggleHamburguerState}>
                <div className={styles.burguerLine}></div>
                <div className={styles.burguerLine}></div>
                <div className={styles.burguerLine}></div>
            </div>
        </>
    );
}
