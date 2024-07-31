import create from 'zustand';

const useJoinUserStore = create((set) => ({
    //회원가입할 데이터
    joinUser:{
        firstname:'',
        lastname:'',
        birth:'',
        gender:'',
        id:'',
        pw:'',
        tel:'',
        nick:'',
    },
    setId: (data) => set((state) => ({
        joinUser: {
            ...state.joinUser,
            id: data
        }
    })),
    setPw: (data) => set((state) => ({
        joinUser: {
            ...state.joinUser,
            pw: data
        }
    }))

}));

export default useJoinUserStore;
