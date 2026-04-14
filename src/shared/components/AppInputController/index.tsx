import { Control, Controller, FieldErrors, FieldValues, Path } from "react-hook-form"
import { AppInput, AppInputProps } from "../AppInput"

interface AppInputControllerProps<T extends FieldValues> extends Omit<AppInputProps, "value" | "onChangeText" | "error"> {
    control: Control<T>
    name: Path<T>
    Errors?: FieldErrors<T>
}
export const AppInputController = <T extends FieldValues>({
    control,
    name,
    Errors,
    ...rest
}: AppInputControllerProps<T>) => {
    return (
        <Controller
            control={control}
            name={name}
            render={({
                field: { onChange, value, onBlur },
                fieldState: { error },
                formState: { isSubmitting }
            }) => <AppInput
                    onChange={onChange}
                    value={value}
                    onBlur={onBlur}
                    error={error?.message}
                    isDisabled={isSubmitting || rest.isDisabled}
                    {...rest}
                />}
        />
    )
}