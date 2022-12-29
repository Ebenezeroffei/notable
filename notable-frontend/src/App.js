import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Wrapper from './components/Wrapper';
import AddNote from './pages/AddNote';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import EditProfile from './pages/EditProfile';
import FavoriteNotes from './pages/FavoriteNotes';
import Home from './pages/Home';
import NoteDetail from './pages/NoteDetail';
import Profile from './pages/Profile';
import SearchNotes from './pages/SearchNotes';

const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='login/' element={<Login />} />
                <Route path='register/' element={<Register />} />
                <Route path='/' element={<Wrapper />}>
                    <Route index element={<EditProfile />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
