import create from 'zustand';

const useStore = create((set) => ({
  
  // aside 메뉴 제어
  isAsideVisible: false, //초기값
  toggleAside: () => set((state) => ({ isAsideVisible: !state.isAsideVisible })),
}));

export default useStore;


// toggleAside: function() {
//   return set(function(state) { 이전상태를 받아와서
//     return { 새로운 상태를 return
//       isAsideVisible: !state.isAsideVisible
//     };
//   });
// }
