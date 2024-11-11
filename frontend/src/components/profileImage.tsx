import React, { useEffect, useState } from 'react';
import { CldImage } from 'next-cloudinary';
import styles from '../styles/navBarStyle.module.css';

export default function ProfileImage({width, height, toggleMenuState}) {
    const [imageSrc, setImageSrc] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('token');

        fetch(`http://localhost:8080/auth/getprofilepicture`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        }).then(response => response.json()
        ).then(data => {
            if(data.path != '#') {
                setImageSrc(data.path);
            } else {
                setImageSrc('https://res.cloudinary.com/dy2mdjqn4/image/upload/v1730743526/project-andrea/default-user.svg');
            }
        })
        .catch(error => {
            console.log(error);
        });
    }, []);

    return(
        <CldImage
            className={styles.profileImage}
            src={imageSrc}
            width={width}
            height={height}
            alt="Imagem de perfil"
            crop={{
                type: 'auto',
                source: true
            }}
            onMouseEnter={toggleMenuState}
        />
    );
}
