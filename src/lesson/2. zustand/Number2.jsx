import React from "react";
import { useNumberStore } from "../store/NumberStore";



export default function Number2(){
    const numberStore = useNumberStore();
    return(
        <>
            <div>
                <h4>number 2</h4>
                <button onClick={()=>{
                    numberStore.decrease(1)
                }}>-</button>
                <span>{numberStore.number}</span>
                <button onClick={()=>{
                    numberStore.increase(1)
                }}>+</button>
            </div>
        </>
    )
}