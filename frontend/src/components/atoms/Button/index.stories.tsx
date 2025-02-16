import {Meta, StoryObj} from '@storybook/react';
import {MemoryRouter} from "react-router-dom";
import {Button} from '.';

const meta: Meta<typeof Button> = {
    component: Button,
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <MemoryRouter>
                <Story/>
            </MemoryRouter>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof Button>;
export const RedButton: Story = {
    args: {
        label: '등록',
    },
};
export const BlueButton: Story = {
    args: {
        label: '닫기',
        color: '#304FFE',
    },
};
