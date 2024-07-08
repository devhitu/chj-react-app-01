import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from "react";
import { useTodoStore } from '../store/TodoStore';
import { useParams } from 'react-router-dom';

export default function DetailTodoPage(){
    const todoStore = useTodoStore();
    const {id} = useParams() //파라미터값을 가져옴
    // const {id} = useLocation() //파라미터값을 여러개 가져옴

    useEffect(()=>{
        // todoStore.resetTodo();
        todoStore.fetchTodo(id)
    },[])

    return(
        <>
            <div style={{padding:'30px'}}>
                <h3>Todo List title</h3>
                <div>user ID:{todoStore.todo.userId}</div>
                <div>id{todoStore.todo.id}</div>
                <div>title{todoStore.todo.title}</div>
                <div>completed{todoStore.todo.completed? '완료':'미완료'}</div>
            </div>
                                 
        </>
    );
}