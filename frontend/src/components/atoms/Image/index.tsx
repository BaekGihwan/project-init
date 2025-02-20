import React from 'react';
import styled from '@emotion/styled';

export interface ImageProps {
    src: string;
    alt: string;
    objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
    style?: React.CSSProperties;
}

export const Image = styled.img<ImageProps>`
  object-fit: ${props => props.objectFit || 'cover'};
  pointer-events: none;
  ${props => props.style && Object.entries(props.style).map(([key, value]) => `${key}: ${value};`).join(' ')}
`;

export const ImageComponent: React.FC<ImageProps> = ({
                                                         src,
                                                         alt,
                                                         objectFit,
                                                         style,
                                                         ...rest
                                                     }) => {
    return (
        <Image
            src={src}
            alt={alt}
            objectFit={objectFit}
            style={style}
            {...rest}
        />
    );
};
