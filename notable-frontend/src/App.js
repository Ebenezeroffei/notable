import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/Wrapper';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';

const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='login/' element={<Login />} />
                <Route path='register/' element={<Register />} />
                <Route path='/' element={<NavBar />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
