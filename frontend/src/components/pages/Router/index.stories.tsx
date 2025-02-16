import {Meta, StoryObj} from '@storybook/react';
import {MemoryRouter} from "react-router-dom";
import {Router} from '.';

const meta: Meta<typeof Router> = {
    component: Router,
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
type Story = StoryObj<typeof Router>;
export const Default: Story = {
    args: {},
};
