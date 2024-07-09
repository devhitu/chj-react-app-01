import { create } from 'zustand';



const useNumberStore = create((set)=>({
    number:10,

    increase:(data) => set((state)=>({number:state.number+data})),
    decrease:(data) => set((state)=>({number:state.number-data})),

}));

export {useNumberStore}