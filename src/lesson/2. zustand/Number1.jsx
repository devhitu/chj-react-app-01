import React from "react";

import { useNumberStore } from "../store/NumberStore";
import { useNavigate } from "react-router-dom";

export default function Number1(){
    const numberStore = useNumberStore();
    const navigate = useNavigate();

    return(
        <>
            <div>
                <h4>number 1</h4>
                <button onClick={()=>{
                    numberStore.decrease(1)
                }}>-</button>
                <span>{numberStore.number}</span>
                <button onClick={()=>{
                    numberStore.increase(1)
                }}>+</button>
            </div>
            <button onClick={()=>{navigate('/number2')}}>number2 이동</button>
        </>
    )
}