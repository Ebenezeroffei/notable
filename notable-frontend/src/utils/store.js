import create from 'zustand';

const useNavStore = create(set => ({
    currentNavIndex: 0,
    currentNavName: "Notes",
    showPhoneSideBar: false,
    isSmallScreen: false,
    navigateTo: (index, text) => set(state => ({ currentNavIndex: index, currentNavName: text })),
    phoneSideBarOff: () => set(state => ({ showPhoneSideBar: false })),
    phoneSideBarOn: () => set(state => ({ showPhoneSideBar: true })),
    bigScreen: () => set(state => ({ isSmallScreen: false })),
    smallScreen: () => set(state => ({ isSmallScreen: true })),
}));

export { useNavStore };