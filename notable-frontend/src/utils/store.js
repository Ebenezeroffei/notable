import create from 'zustand';

const useNavStore = create(set => ({
    currentNavIndex: 0,
    navigateTo: (index) => set(state => ({ currentNavIndex: index })),
}));

export { useNavStore };