import { tv, type VariantProps } from "tailwind-variants";



export enum AppButtonVariants {
    FILLED = "field",
    OUTLINE = "outline",
}
export const buttonVatriants = tv({
    slots: {
        base: 'w-full h-[48px] rounded-[10px] border px-4 flex-row items-center',
        text: 'font-semibold text-base',
        icon: ""
    },
    variants: {
        hasIcon: {
            true: {
                base: "justify-between "
            },
            false: {
                base: "justify-center"
            }
        },
        isLoading: {
            true: {
                base: "opacity-60"
            },
        },
        isDisabled: {
            true: {
                base: "opacity-50"
            },
        },
        variant: {
            field: {
                base: "bg-purple-base border-purple-base text-white",
                text: "text-white"
            },
            outline: {
                base: "bg-transparent  border-purple-base",
                text: "text-purple-base"
            }
        }
    },
    defaultVariants: {
        hasIcon: false,
        isLoading: false,
        isDisabled: false,
        variant: AppButtonVariants.FILLED
    }
});

export type ButtonVariantsProps = VariantProps<typeof buttonVatriants>