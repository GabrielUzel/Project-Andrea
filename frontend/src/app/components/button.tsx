import React from 'react';
import styles from '../../styles/buttonStyle.module.css';

type ButtonProps = {
    label: string;
};

export default function Button({ label }: ButtonProps) {
    return (
        <button className={styles.buttonTemplate} type='submit'>
            { label }
        </button>
    );
}
