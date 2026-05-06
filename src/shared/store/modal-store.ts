import { create } from "zustand"

interface ModalConfig{
    animationType?:  'none' | 'fade' | 'slide'
    transparent?: boolean,
    statusBarTransLucent?: boolean
}


interface ModalStoreState {
    isOpen: boolean
    content: React.ReactNode | null 
    config: ModalConfig
    open: (content: React.ReactNode, config?: ModalConfig) => void
    close: () => void
}

export const useModalStore = create<ModalStoreState>((set, get)=>({ 
    isOpen: false, 
    content: null, 
    config: {
        animationType: 'fade',
        transparent: true,
        statusBarTransLucent: false
    }, 
    open: (content: React.ReactNode, config?: ModalConfig) => set({
        isOpen: true,
        content, 
        config: {
            ...get().config,
            ...config}
    }), 
    close: () => set({
        isOpen: false,
        content: null
    }) 
}))