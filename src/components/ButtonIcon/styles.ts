import styled, { css } from 'styled-components/native'
import { MaterialIcons } from '@expo/vector-icons'

import { ContainerProps, VariantProps } from './types'

export const Container = styled.TouchableOpacity<ContainerProps>`
  ${({ theme: { COLORS }, disabled }) => css`
    width: 56px;
    height: 56px;
    align-items: center;
    justify-content: center;
    ${disabled &&
    css`
      background-color: ${COLORS.GRAY_400};
      opacity: 0.5;
    `}
  `}
`

export const Icon = styled(MaterialIcons).attrs<VariantProps>(
  ({ theme: { COLORS }, variant }) => ({
    size: 24,
    color: variant === 'PRIMARY' ? COLORS.GREEN_700 : COLORS.RED_DARK,
  }),
)``
