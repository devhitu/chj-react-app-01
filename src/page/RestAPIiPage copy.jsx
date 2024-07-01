import React from 'react'
import axios from 'axios'
import { useState } from "react";

export default function RestApiPage(){
    const [title, setTitle] = useState('');
    const [useId, setUserId] = useState('');
    const [id, setId] = useState('');


    const [todo, setTodo] = useState({});

    const getData = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
        console.log(response.data)
        // setTitle(response.data.title)
        // setUserId(response.data.userId)
        // setId(response.data.id)
        setTodo(response.data)
    }

    return(
        <>
            <div style={{padding:'10px'}}>
                <h3>REST API 테스트</h3>
                <button onClick={getData}>데이터요청</button>
                <h1>title {todo.title}</h1>
                <h1>userId {todo.userId}</h1>
                <h1>id: {todo.id}</h1>
                {/* <h1>title {title}</h1>
                <h1>userId {useId}</h1>
                <h1>id: {id}</h1> */}
            </div>
        </>
    )
}