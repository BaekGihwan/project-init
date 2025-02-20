import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import {LoginPage} from '../LoginPage';
import {Header} from '../../organisms/Header'

export const Router = () => {
    console.log('Router/index.tsx');

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/login" replace/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/header" element={<Header/>}/>
            </Routes>
        </BrowserRouter>
    )
}