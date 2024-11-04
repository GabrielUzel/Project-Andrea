import React from 'react';
import styles from '../../../styles/navBarStyle.module.css';
import Link from 'next/link';

export default function EssentialsNotLogged() {
    return (
        <div className={styles.essentialsDiv}>
            <Link className={styles.essentialsLink} href='/login'>Fazer login</Link>
            <Link className={styles.essentialsLink} href='/register'>Cadastre-se</Link>
        </div>
    );
}
