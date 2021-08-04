import create from 'zustand'

const useStore = create(set => ({
  sceneIndex: 0,
  selectScene0: () => set(() => {
    console.log("HERE")
    return { sceneIndex: 0 }
  }),
  selectScene1: () => set(() => ({ sceneIndex: 1 })),
  selectScene2: () => set(() => ({ sceneIndex: 2 })),
  selectScene3: () => set(() => ({ sceneIndex: 3 })),
  bears: 0,
  increasePopulation: () => set(state => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 })
}))

export default useStore