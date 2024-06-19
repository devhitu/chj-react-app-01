import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './page/Home';
import Login from './page/Login';
import Join from './page/Join';
import Test1 from './page/Test1';
import FormPage from './page/FormPage';
import ResultPage from './page/ResultPage';
import ZFormPage from './page/ZFormPage';
import ZResultPage from './page/ZResultPage';

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                {/* dasd */}
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/join" element={<Join />} />
                <Route path="/Test1" element={<Test1 />} />
                <Route path="/FormPage" element={<FormPage />} />
                <Route path="/ResultPage" element={<ResultPage />} />
                <Route path="/ZFormPage" element={<ZFormPage />} />
                <Route path="/ZResultPage" element={<ZResultPage />} />
            </Routes>
        </BrowserRouter>
        
    
        );
}