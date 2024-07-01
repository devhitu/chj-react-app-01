import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './page/Home';
import Login from './page/Login';
import Join from './page/Join';
import FormPage from './page/FormPage';
import ResultPage from './page/ResultPage';
import ZFormPage from './page/ZFormPage';
import ZResultPage from './page/ZResultPage';
import Number1 from './page/Number1';
import Number2 from './page/Number2';

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                {/* dasd */}
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/join" element={<Join />} />
                <Route path="/FormPage" element={<FormPage />} />
                <Route path="/ResultPage" element={<ResultPage />} />
                <Route path="/ZFormPage" element={<ZFormPage />} />
                <Route path="/ZResultPage" element={<ZResultPage />} />
                
                <Route path="/Number1" element={<Number1 />} />
                <Route path="/Number2" element={<Number2 />} />
            </Routes>
        </BrowserRouter>
        
    
        );
}