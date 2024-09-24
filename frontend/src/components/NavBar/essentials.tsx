import React from 'react';
import styles from '../styles/navBarStyle.module.css';
import Link from 'next/link';

export default function Essentials() {
    return (
        <div className={styles.essentialsDiv}>
            <Link href='/login'>Fazer login</Link>
            <Link href='/signup'>Cadastre-se</Link>
        </div>
    );
}
