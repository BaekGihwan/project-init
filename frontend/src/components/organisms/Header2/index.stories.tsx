// import React from 'react';
// import { StoryFn, Meta } from '@storybook/react';
// import { HeaderMenuBar, HeaderMenuBarProps } from '.';
//
// export default {
//     title: 'Components/HeaderMenuBar',
//     component: HeaderMenuBar,
// } as Meta;
//
// const Template: StoryFn<HeaderMenuBarProps> = (args) => <HeaderMenuBar {...args} />;
//
// export const Default = Template.bind({});
// Default.args = {
//     logo: 'MyApp',
//     menuItems: ['Home', 'About', 'Services', 'Contact', 'test'],
//     onMenuItemClick: (item) => console.log(`Clicked on ${item}`),
//     onProfileClick: () => console.log('Profile clicked'),
// };
//
// export const WithLongMenu = Template.bind({});
// WithLongMenu.args = {
//     ...Default.args,
//     menuItems: ['Home', 'About', 'Services', 'Products', 'Blog', 'Contact', 'FAQ'],
// };
import React from 'react';
import styled from '@emotion/styled';


export default {}
const Wrapper = styled.div`
  max-width: 400px;

`;

export const Header = () => {

    return (
        <Wrapper>

        </Wrapper>
    );
};