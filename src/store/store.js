import create from 'zustand';

const useStore = create((set) => ({
  isAsideVisible: false, //초기상태 안보이는 상태
  toggleAside: () => set((state) => ({ isAsideVisible: !state.isAsideVisible })),
}));

export default useStore;