import { TouchableOpacityProps } from 'react-native'

export type TeamFilterProps = TouchableOpacityProps &
  ContainerProps & {
    label: string
  }

export type ContainerProps = {
  isActive?: boolean
}
