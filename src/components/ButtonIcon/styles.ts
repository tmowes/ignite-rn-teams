import styled from 'styled-components/native'
import { MaterialIcons } from '@expo/vector-icons'

import { ContainerProps } from './types'

export const Container = styled.TouchableOpacity`
  width: 56px;
  height: 56px;
  align-items: center;
  justify-content: center;
`

export const Icon = styled(MaterialIcons).attrs<ContainerProps>(
  ({ theme: { COLORS }, variant }) => ({
    size: 24,
    color: variant === 'PRIMARY' ? COLORS.GREEN_700 : COLORS.RED_DARK,
  }),
)``
