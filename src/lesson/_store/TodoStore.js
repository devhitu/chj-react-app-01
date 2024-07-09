import { create } from "zustand";
import axios from 'axios';

const useTodoStore =  create((set,get)=>({
    todos: [],
    todo:{},

    resetTodo:()=>{
        // set({todo:{}})
    },

    fetchTodo:async(todoId)=>{
        //todo 1개 조회 rest api 요청
        try{
            set({todo:{}})
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos/'+todoId);
            set({todo:response.data});
            // console.log(response.data)
        }catch(error){
            console.error('Failed REST API', error)
        }
    },

    fetchTodos:async ()=> {
        //todos 조회 rest api 요청
        try{
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
            set({todos:response.data});
            // console.log(response.data)
        }catch(error){
            console.error('Failed REST API', error)
        }
    }
}))

export{useTodoStore}