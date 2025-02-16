import React from 'react';
import styled from '@emotion/styled';

export interface ImageProps {
    src: string;
    alt: string;
    width?: number | string;
    height?: number | string;
    objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
}

export const Image = styled.img<ImageProps>`
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  object-fit: ${props => props.objectFit || 'cover'};
  pointer-events: none;
`;

export const ImageComponent: React.FC<ImageProps> = ({
                                                         src,
                                                         alt,
                                                         width,
                                                         height,
                                                         objectFit,
                                                         ...rest
                                                     }) => {
    return (
        <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            objectFit={objectFit}
            {...rest}
        />
    );
};
