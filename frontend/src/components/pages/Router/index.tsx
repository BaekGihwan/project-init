import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import {LoginPage} from '../LoginPage';

export const Router = () => {
    console.log('Router/index.tsx');

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/login" replace/>}/>
                <Route path="/login" element={<LoginPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}