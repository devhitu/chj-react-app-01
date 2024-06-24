import create from 'zustand';

const useStore = create((set) => ({
  
  // aside 메뉴 제어
  isAsideVisible: false, //초기값
  toggleAside: () => set((state) => ({ isAsideVisible: !state.isAsideVisible })),
}));

export default useStore;