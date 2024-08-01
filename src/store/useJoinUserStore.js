import create from 'zustand';

const useJoinUserStore = create((set) => ({
    // 회원가입할 데이터
    joinUser: {
        firstname: '',
        lastname: '',
        birth: '',
        gender: '',
        id: '',
        pw: '',
        tel: '',
        nick: '',
    },
    setFirstName: (data) => set((state) => ({
        joinUser: {
            ...state.joinUser,
            firstname: data
        }
    })),
    setLastName: (data) => set((state) => ({
        joinUser: {
            ...state.joinUser,
            lastname: data
        }
    })),
    setYear: (data) => set((state) => ({
        joinUser: {
            ...state.joinUser,
            year: data
        }
    })),
    setMonth: (data) => set((state) => ({
        joinUser: {
            ...state.joinUser,
            month: data
        }
    })),
    setDay: (data) => set((state) => ({
        joinUser: {
            ...state.joinUser,
            day: data
        }
    })),
    setGender: (data) => set((state) => ({
        joinUser: {
            ...state.joinUser,
            gender: data
        }
    })),
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
    })),
    getState: () => useJoinUserStore.getState().joinUser, // 상태 읽기 메서드 추가
}));

export default useJoinUserStore;
