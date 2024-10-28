'use client'

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/burguerMenuStyle.module.css';

export default function BurguerMenu() {
    const [hamburguerIsOpen, setHamburguerIsOpen] = useState(false);

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
                        alt="Signuo image"
                    />
                    Cadastre-se
                </Link>
            </div>

            <div className={styles.burguer} onClick={toggleHamburguerState}>
                <div className={styles.burguerLine}></div>
                <div className={styles.burguerLine}></div>
                <div className={styles.burguerLine}></div>
            </div>
        </>
    );
}
