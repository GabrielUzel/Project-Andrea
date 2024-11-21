import React from 'react';
import styles from '../styles/errorMessageStyle.module.css';

export default function ErrorMessage({errorMessage}) {
    return(
        <div className={styles.errorMessage} style={{visibility: errorMessage ? 'visible' : 'hidden'}}>
            <p>
                {errorMessage}
            </p>
        </div>
    );
}
