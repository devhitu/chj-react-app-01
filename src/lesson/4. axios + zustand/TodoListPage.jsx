import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from "react";
import { useTodoStore } from '../store/TodoStore';
import { useNavigate } from 'react-router-dom';

export default function TodoListPage(){

    const todoStore = useTodoStore();
    const navigate = useNavigate();

    useEffect(()=>{
        todoStore.fetchTodos()
    },[])

    const handleGoClick = (id) => {
        navigate(`/DetailTodoPage/${id}`)
    }   

    return(
        <>
            <div style={{padding:'30px'}}>
                <h3>Todo List</h3>
                {/* <div style={{padding:'10px'}}>
                    <nav>title 1</nav>
                    <nav>title 2</nav>
                    <nav>title 3</nav>
                </div> */}
                {todoStore.todos.map((todo)=>(
                    <nav key={todo.id} onClick={()=> {handleGoClick(todo.id)}}>{todo.title}</nav>
                ))}
            </div>
                         
        </>
    )
}