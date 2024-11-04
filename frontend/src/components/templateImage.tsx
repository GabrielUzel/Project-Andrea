import React from 'react';
import Image from 'next/image';

export default function TemplateImage({width, height, className}) {
    return (
        <Image
            src="/img/template.jpeg"
            width={width}
            height={height}
            alt="Logo image"
            className={className}
            priority={true}
        />
    );
}
