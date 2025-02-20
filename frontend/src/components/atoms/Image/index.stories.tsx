import React from 'react';
import {StoryFn, Meta} from '@storybook/react';
import {ImageComponent, ImageProps} from '.';

export default {
    title: 'Components/ImageComponent',
    component: ImageComponent,
    argTypes: {
        src: {control: 'text'},
        alt: {control: 'text'},
        width: {control: 'text'},
        height: {control: 'text'},
        objectFit: {control: 'select', options: ['cover', 'contain', 'fill', 'none', 'scale-down']},
    },
} as Meta;

const Template: StoryFn<ImageProps> = (args) => <ImageComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
    src: 'https://via.placeholder.com/300x200',
    alt: 'Placeholder image',
};

export const CustomSize = Template.bind({});
CustomSize.args = {
    src: 'https://via.placeholder.com/500x300',
    alt: 'Custom size image',
    objectFit: 'contain',
};
