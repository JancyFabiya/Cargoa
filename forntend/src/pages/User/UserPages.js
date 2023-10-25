import React from 'react'
import { Routes, Route } from "react-router-dom";
import Login from '../../screens/Login/Login';
import Signup from '../../screens/Signup/Signup';
import UserApplication from '../../screens/UserApplication';
import Userhome from '../../screens/Userhome'

const UserPages = () => {
    return (
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/logged' element={<Userhome />} />
            <Route path='/orders' element={<UserApplication />} />
        </Routes>
    )
}

export default UserPages