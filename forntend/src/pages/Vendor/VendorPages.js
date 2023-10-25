import React from 'react'
import { Routes, Route } from "react-router-dom";
import AdminSideBar from '../../components/AdminBar/AdminSideBar'
const VendorPages = () => {
    return (
        <Routes>
            <Route path='/dashboard' element={<AdminSideBar />}></Route>
        </Routes>
    )
}

export default VendorPages