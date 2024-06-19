import React from "react";
import { useState} from "react";
import { useNavigate } from "react-router-dom";

export default function FormPage(){

    let navigate = useNavigate(); //페이지이동함수
    const [value, setValue] = useState('');

    
    function handlerInputChanged(e){
        setValue(e.target.value);
    }

    function handlerClick(){
        navigate('/ResultPage',{
            state:{
                result:value
            }
        });
    }


    return (
        <div>
            <input onChange={handlerInputChanged} value={value} placeholder="전달 할 값 입력"/>
            <button onClick={handlerClick}>결과 페이지로 이동</button>
        </div>
    )
}