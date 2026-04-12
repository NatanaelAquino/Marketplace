import { create } from 'zustand'
import { UserInterface } from '../interfaces/user'
import { persist, createJSONStorage } from 'zustand/middleware'
import AsyncStore from '@react-native-async-storage/async-storage'

interface setSessionParams {
    user: UserInterface
    token: string
    refreshToken: string
}

interface updateTokenParams {
    token: string
    refreshToken: string
}

interface UserStore {
    user: UserInterface | null
    token: string | null
    refreshToken: string | null
    setSession: (sessionData: setSessionParams) => void
    logout: () => void
    updateToken: (updateTokenData: updateTokenParams) => void
}
const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      refreshToken: null,
      logout: () => {
        set({ user: null, token: null, refreshToken: null });
      },
      setSession: (sessionData) => set({ ...sessionData }),
      updateToken: (updateTokenData) => set({ ...updateTokenData }),
    }),
    {
      name: 'marketplace-auth',
      storage: createJSONStorage(() => AsyncStore),
    }
  )
);

export default useUserStore;

