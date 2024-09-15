import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './page/Home';
import Login from './page/Login';
import Join from './page/Join';
import Account from './page/Account';
import Upload from './page/Upload';

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                {/* dasd */}
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/join" element={<Join />} />
                <Route path="/account" element={<Account />} />
                <Route path="/upload" element={<Upload />} />
                {/* <Route path="/join/:step" element={<Join />} /> */}
            </Routes>
        </BrowserRouter>
        
    
        );
}