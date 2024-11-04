import React, { useState } from 'react';
import { CldImage } from 'next-cloudinary';
import styles from '../styles/navBarStyle.module.css';

export default function ProfileImage({width, height, toggleMenuState}) {
    const [imageSrc, setImageSrc] = useState('https://res.cloudinary.com/dy2mdjqn4/image/upload/v1730743526/project-andrea/default-user.svg');

    return(
        <CldImage
            className={styles.profileImage}
            src={imageSrc}
            width="40"
            height="40"
            alt="Image de perfil"
            crop={{
                type: 'auto',
                source: true
            }}
            onMouseEnter={toggleMenuState}
        />
    );
}
