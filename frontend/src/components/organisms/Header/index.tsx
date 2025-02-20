import React from 'react';
import {NavLink, useLocation} from 'react-router-dom';
import {useEffect, useState} from 'react';
import styled from '@emotion/styled';
import {Image} from '../../atoms/Image';
import logo from '../../../asets/image/logo.png';
import {Container} from "@mui/material";
import {Button} from '../../atoms/Button';


const Wrapper = styled.div`
  background-color: #668fb8;
  height: 6vh; // 높이의 5% 크기
  display: flex;
  align-items: center;
  font-family: sans-serif;
`;

const logoGroupStyle: React.CSSProperties = {
    width: 'auto',
    padding: '0',
    margin: '0'
};

const imageCustomStyle: React.CSSProperties = {
    maxHeight: '6vh',
    maxWidth: '100%',
    objectFit: 'contain'
};

const Menu = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
`;

const MenuItem = styled.li`
  margin-left: 20px;
`;

const navLinkStyle = {
    textDecoration: 'none',
    color: 'white',
    padding: '15px',
    borderRadius: '5px',
    margin: '5px',
    transition: 'background-color 0.3s ease',
    fontSize: '3vh',
};

const buttonGroupStyle: React.CSSProperties = {
    display: 'contents',
};

const buttonStyle: React.CSSProperties = {
    border: '1px solid white',
    borderRadius: '10px',
    margin: '0 10px',
    fontFamily: 'sans-serif',
    fontSize: '20px',
}

function getClassName(isPending: boolean, isActive: boolean): string {
    if (isPending) {
        return 'pending';
    }
    if (isActive) {
        return 'active';
    }
    return '';
}

const currentMenus = [
    {to: '/siteCustomer', label: '고객사'},
    {to: '/siteInfoLink', label: '정보 링크'},
    {to: '/siteType', label: '산업군'},
    {to: '/siteUser', label: '담당자'},
];

export const Header = () => {
    return (
        <Wrapper>
            <Container className='logoGroup' style={logoGroupStyle}>
                <Image src={logo} alt='로고' height='100%' width='auto' style={imageCustomStyle}></Image>
            </Container>
            <Container className='menuGroup'>
                <Menu>
                    {currentMenus.map((menuItem) => {
                        return (
                            <MenuItem key={menuItem.to}>
                                <NavLink
                                    to={menuItem.to}
                                    style={({isActive}) => ({
                                        ...navLinkStyle,
                                        background: isActive ? 'rgba(0,0,0,0.3)' : 'transparent',
                                    })}
                                    end
                                    className={({isActive, isPending}) =>
                                        getClassName(isPending, isActive)}
                                >
                                    {menuItem.label}
                                </NavLink>
                            </MenuItem>
                        );
                    })}
                </Menu>
            </Container>
            <Container className='buttonGroup' style={buttonGroupStyle}>
                <Button label="로그인" color='#668fb8' width='5vw' height='5vh' style={buttonStyle}></Button>
            </Container>
        </Wrapper>
    );
};