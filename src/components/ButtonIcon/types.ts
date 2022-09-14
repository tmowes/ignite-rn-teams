import { TouchableOpacityProps } from 'react-native'

import { MaterialIcons } from '@expo/vector-icons'

export type ButtonIconProps = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap
  variant?: IconButtonVariantProps
}

export type IconButtonVariantProps = 'PRIMARY' | 'SECONDARY'

export type ContainerProps = {
  variant: IconButtonVariantProps
}
