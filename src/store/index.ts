import create from 'zustand'

export type StoreStateType ={
    user:any;
    setUser:(arg:any)=>void;
    resetUser:()=>void;
}

export const useZustandStore = create((set,get) => ({
  user: {},
  resetUser: () => set((state:StoreStateType) => ({ user:{} })),
  setUser: (user:any) => set((state:StoreStateType) => ({ user })),
 
}))