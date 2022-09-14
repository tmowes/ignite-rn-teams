import { TouchableOpacityProps } from 'react-native'

import { MaterialIcons } from '@expo/vector-icons'

export type ButtonIconProps = TouchableOpacityProps &
  VariantProps & {
    icon: keyof typeof MaterialIcons.glyphMap
  }

export type IconButtonVariantProps = 'PRIMARY' | 'SECONDARY'

export type ContainerProps = {
  disabled?: boolean
}

export type VariantProps = {
  variant?: IconButtonVariantProps
}
