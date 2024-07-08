import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from "react";

export default function RestApiPage(){

    const [todo, setTodo] = useState({}); //단일 => 객체
    const [todos, setTodos] = useState([]); //배열

    useEffect(()=>{
        getTodos() //로드시 불러옴
    },[])

    const getData = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
        console.log(response.data)
        // setTitle(response.data.title)
        // setUserId(response.data.userId)
        // setId(response.data.id)
        setTodo(response.data)
    }

    const getTodos = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos/');
        console.log(response.data)
        setTodos(response.data)
    } 

    return(
        <>
            <div style={{padding:'10px'}}>
                <h3>REST API 테스트</h3>
                <button onClick={getData}>데이터요청</button>
                <h5>title {todo.title}</h5>
                <h5>userId {todo.userId}</h5>
                <h5>id: {todo.id}</h5>

                <hr />

                <h3>todo 여러 개</h3>
                {
                    todos.map(item =>(
                        <div key={item.id}>{item.title}</div>
                    ))
                }
                <button onClick={getTodos}>200개</button>
                <h5>title {todos.title}</h5>
                <h5>userId {todos.userId}</h5>
                <h5>id: {todos.id}</h5>                
            </div>
        </>
    )
}