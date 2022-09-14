import styled, { css } from 'styled-components/native'

import { ContainerProps } from './types'

export const Container = styled.TouchableOpacity<ContainerProps>`
  ${({ theme: { COLORS }, variant }) => css`
    flex: 1;
    min-height: 56px;
    max-height: 56px;
    align-items: center;
    justify-content: center;

    background-color: ${COLORS.GRAY_600};
    border-radius: 6px;
    margin-top: 16px;

    ${variant === 'PRIMARY' &&
    css`
      background-color: ${COLORS.GREEN_700};
    `}
    ${variant === 'SECONDARY' &&
    css`
      background-color: ${COLORS.RED_DARK};
    `}
  `}
`

export const Title = styled.Text`
  ${({ theme: { COLORS, FONT, SIZE } }) => css`
    color: ${COLORS.WHITE};
    font-size: ${SIZE.MD};
    font-family: ${FONT.BOLD};
  `}
`
