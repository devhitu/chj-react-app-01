import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import DetailTodoPage from './page/DetailTodoPage';

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/DetailTodoPage/:id" element={<DetailTodoPage />} />
            </Routes>
        </BrowserRouter>
        
    
        );
}