import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './page/Home';
import Login from './page/Login';
import Join from './page/Join';
import Settings from './page/Settings';

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                {/* dasd */}
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/join" element={<Join />} />
                <Route path="/settings" element={<Settings />} />
                {/* <Route path="/join/:step" element={<Join />} /> */}
            </Routes>
        </BrowserRouter>
        
    
        );
}