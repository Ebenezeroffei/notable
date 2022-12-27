import create from 'zustand';

const useNavStore = create(set => ({
    currentNavIndex: 0,
    showPhoneSideBar: false,
    isSmallScreen: false,
    navigateTo: (index) => set(state => ({ currentNavIndex: index })),
    phoneSideBarOff: () => set(state => ({ showPhoneSideBar: false })),
    phoneSideBarOn: () => set(state => ({ showPhoneSideBar: true })),
    bigScreen: () => set(state => ({ isSmallScreen: false })),
    smallScreen: () => set(state => ({ isSmallScreen: true })),
}));

export { useNavStore };