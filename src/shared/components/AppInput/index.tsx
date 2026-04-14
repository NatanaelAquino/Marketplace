import { Pressable, TextInput, TouchableOpacity, View, Text, TextInputProps } from "react-native";
import { AppInputVariants, appInputVariants } from "./input.variants";
import { Ionicons } from "@expo/vector-icons";
import { FC, use } from "react";
import { useAppInputViewModel } from "./useAppInputViewModel";


export interface AppInputProps extends TextInputProps, AppInputVariants {
  label?: string;
  letIcon?: keyof typeof Ionicons.glyphMap;
  rightIcon?: keyof typeof Ionicons.glyphMap;
  containerClassName?: string;
  mask?: (value: string) => void | string;
  error?: string
}


export const AppInput: FC<AppInputProps> = ({
  label,
  letIcon,
  rightIcon,
  containerClassName,
  mask,
  value,
  isError,
  secureTextEntry = false,
  onBlur,
  onFocus,
  onChangeText,
  error,
  isDisabled,

  ...textInputPrps
}) => {


  const {
    getIconColor,
    handleWrapperPress,
    handlePasswordVisibility,
    handleFocus,
    handleBlur,
    inputRef,
    isFocused,
    handleChangeText,
    showPassword
  } = useAppInputViewModel({
    onBlur,
    onFocus,
    isError: !!error,
    mask,
    onChangeText,
    isDisabled,
    secureTextEntry,
    value,
  })
  const styles = appInputVariants({
    isFocused,
    isError: !!error,
    isDisabled
  })

  return (
    <View className={styles.container({ className: containerClassName })}>
      <Text className={styles.label()}>{label}</Text>
      <Pressable className={styles.wrapper()}>
        {letIcon && (
          <Ionicons name={letIcon} size={20} color={getIconColor()} />
        )}
        <TextInput
          onBlur={handleBlur}
          onFocus={handleFocus}
          className={styles.input()}
          onChangeText={handleChangeText}
          value={value}
          {...textInputPrps}
          secureTextEntry={showPassword}
        />
        {secureTextEntry && (
          <TouchableOpacity activeOpacity={0.7} onPress={handlePasswordVisibility}>
            <Ionicons
              name={showPassword ? "eye-outline" : "eye-off-outline"}
              size={20}
              color={getIconColor()}
            />
          </TouchableOpacity>
        )}

      </Pressable>

      {
        error && <Text className={styles.error()}>
          <Ionicons name="alert-circle-outline" className="ml-2" />{error}
        </Text>
      }
    </View>
  );
}