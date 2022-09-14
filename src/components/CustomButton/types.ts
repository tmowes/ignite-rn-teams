import { TouchableOpacityProps } from 'react-native'

export type CustomButtonProps = TouchableOpacityProps &
  ContainerProps & {
    label: string
  }

export type ButtonVariantProps = 'PRIMARY' | 'SECONDARY'

export type ContainerProps = {
  variant?: ButtonVariantProps
  disabled?: boolean
}
