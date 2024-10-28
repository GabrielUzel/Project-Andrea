import React from 'react';
import Image from 'next/image';
import NavBar from '../../components/NavBar/navBar';
import LoginForm from '../../components/Login/loginForm';
import Link from 'next/link';
import styles from '../../styles/loginPageStyle.module.css';

export default function Login() {
    return (
        <>
            <NavBar />
            <main className={styles.main}>
                <section className={`${styles.loginForm} ${styles.flex}`}>
                    <div className={`${styles.loginTtile} ${styles.flex}`}>
                        <h1 className='title'>Login</h1>
                    </div>
                    <div className={`${styles.loginMainFrame} ${styles.flex}`}>
                        <LoginForm/>
                        <div className={`${styles.loginEssentials} ${styles.flex}`}>
                            <Link className={`${styles.googleLogo} ${styles.borderRadius10}`} href='/login/google'>
                                <Image
                                    src="/img/google-logo.svg"
                                    width={28.71}
                                    height={29.33}
                                    alt="Logo image"
                                />
                                <p>
                                    Entrar com Google
                                </p>
                            </Link>
                            <div className={`${styles.loginExtraLinks} ${styles.flex}`}>
                                <p>
                                    Não tem uma conta? <Link className={styles.link} href='/signup'>Cadastre-se</Link>
                                </p>
                                <Link className={styles.link} href='/forgotpassword'>Esqueceu sua senha?</Link>
                            </div>
                        </div>
                    </div>
                </section>
                <div className={styles.imageContainer}>
                    <Image
                        src="/img/template.jpeg"
                        width={500}
                        height={500}
                        alt="Logo image"
                        className={styles.backgroundImage}
                    />
                </div>
            </main>
        </>
    );
}
