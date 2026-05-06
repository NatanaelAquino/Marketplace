import { Ionicons } from "@expo/vector-icons";
import { useModalStore } from "../store/modal-store";
import { createElement } from "react";
import { SelectioModalProps, SelectionModal } from "../components/modals/selecionModal";


export type SelectionVariant = "primary" | "secondary" | "danger";
export interface SelectionOption {
    text: string 
    onPress: () => void
    icon?: keyof typeof Ionicons.glyphMap
    variant?: SelectionVariant
}

export const useAppModal = () => {
    const { open, close } = useModalStore();


    const showSelection = ({ title, message, options: option }:
         { 
            title: string, 
            message?: string, 
            options: SelectionOption[]
         }) =>{
        open(createElement(SelectionModal, 
            {
                title,
                message,
                option
             } as SelectioModalProps
        )
        
    );  
    };

    return {showSelection}
}