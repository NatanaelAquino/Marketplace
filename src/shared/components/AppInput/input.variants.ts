import { tv, VariantProps } from 'tailwind-variants';

export const appInputVariants = tv({
    slots: {
        container: 'w-full my-4',
        wrapper: "flex-row items-center border-b border-gray-200  pb-2",
        input: "bg-transparent text-gray-500 text-base flex-1",
        label: "text-gray-300 text-xs mb-3 font-semibold",
        error: "text-danger text-sm mt-1",
    },
    variants: {
        isFocused: {
            true: {
                wrapper: "border-purple-base",
                label: "text-purple-base",
            },

        },
        isError: {
            true: {
                wrapper: "border-danger",
                label: "text-danger",
            },
        },
        isDisabled: {
            true: {
                wrapper: "opacity-50",
                label: "text-gray-300",
            },
        }
    },
    defaultVariants: {
        isFocused: false,
        isError: false,
        isDisabled: false
    },

})

export type AppInputVariants = VariantProps<typeof appInputVariants>