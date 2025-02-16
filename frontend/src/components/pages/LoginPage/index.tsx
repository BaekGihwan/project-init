import React, {useState} from 'react';
import {Container, TextField} from '@mui/material';
import styled from '@emotion/styled';
import {encode} from 'base-64';
import {Button} from '../../atoms/Button';
import {Image} from '../../atoms/Image';
import logo from '../../../asets/image/logo.png';
import axios from "axios";

const Wrapper = styled.div`
  max-width: 400px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const LoginPage = () => {
    const [form, setForm] = useState({
        id: '',
        password: '',
    });
    const {id, password} = form;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleLoginClick = async (e?: React.MouseEvent<HTMLButtonElement> | undefined) => {
        e?.preventDefault();
        if (id === '') {
            window.alert('아이디를 입력해주세요');
        } else if (password === '') {
            window.alert('비밀번호를 입력해주세요');
        } else {
        const params = {
            id: id,
            password: encode(password)
        }

        axios.post(`${process.env.REACT_APP_SOS_API_URL}/login`, params)
            .then(response =>{
                console.log('response: ', response);
            })
            .catch(error => {
                console.log('error: ', error);
            })
            .finally(() =>{
                console.log('API 요청 완료');
            })
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleLoginClick();
        }
    }

    return (
        <Wrapper>
            <Container className="imageGroup">
                <Image src={logo} alt='로고' width='100%' height='100%'></Image>
            </Container>
            <Container className="inputGroup">
                <TextField name="id" value={id} label="아이디" type="text" variant="standard" onChange={handleChange} onKeyDown={handleKeyDown} fullWidth autoFocus/>
                <TextField name="password" value={password} label="비밀번호" type="password" variant="standard" onChange={handleChange} onKeyDown={handleKeyDown} fullWidth/>
            </Container>
            <Container className='buttonGroup'>
                <Button label="Login" color='#668fb8' width='100%' height='40px' onClick={handleLoginClick}/>
            </Container>
        </Wrapper>
    );
};
