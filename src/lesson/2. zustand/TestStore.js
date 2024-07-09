import create from 'zustand';

// Zustand를 이용해 상태 관리를 위한 스토어를 생성합니다.
const useTestStore = create((set) => ({
    value: '', // 초기 상태는 빈 문자열로 설정합니다.
    setValue: (newValue) => set({ value: newValue }), // value를 변경하는 함수입니다.
}));

export { useTestStore };