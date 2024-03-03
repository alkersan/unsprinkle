import React from 'react';
import styled from "styled-components/macro";

const ResponsiveImage = ({className, src, alt}) => {
    const avifs = `
        ${src.replace('.jpg', '.avif')} 1x,
        ${src.replace('.jpg', '@2x.avif')} 2x,
        ${src.replace('.jpg', '@3x.avif')} 3x`;

    const jpgs = `
    ${src} 1x,
    ${src.replace('.jpg', '@2x.jpg')} 2x,
    ${src.replace('.jpg', '@3x.jpg')} 3x`;

    return (
        <picture >
            <source type="image/avif" srcSet={avifs}/>
            <img className={className} alt={alt} src={src} srcSet={jpgs} />
        </picture>
    );
};

export default ResponsiveImage;
