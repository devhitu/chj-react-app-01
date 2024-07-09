import React from "react";
import { useLocation } from "react-router-dom";

export default function ResultPage(){

    
    const {state} = useLocation();
    

    return (
        <div>
            <h2>결과 : {state.result}</h2>
        </div>
    )
}