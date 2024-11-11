'use client'

import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import styles from '../styles/seePasswordStyle.module.css';

export default function SeePasswordIcon({changeTypeIsPassword}) {
    const [isShown, setIsShown] = useState(false);

    const handleClick = () => {
        changeTypeIsPassword();
        setIsShown(!isShown);
    }

    return (
        <Image
            src={isShown ? "/img/eye-icon.svg" : "/img/eye-slash-icon.svg"}
            width={20}
            height={20}
            alt="Eye image"
            onClick={handleClick}
            className={styles.seePasswordImage}
        />
    );
}
