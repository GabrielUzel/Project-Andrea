import React from 'react';
import styles from './navBarStyle.module.css';

export default function Essentials() {
    return (
        <div className={styles.essentialsDiv}>
            <a href='/login'>Fazer login</a>
            <a href='/signup'>Cadastre-se</a>
        </div>
    );
}
