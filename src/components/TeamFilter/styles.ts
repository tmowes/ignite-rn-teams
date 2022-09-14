import styled, { css } from 'styled-components/native'

import { ContainerProps } from './types'

export const Container = styled.TouchableOpacity<ContainerProps>`
  ${({ theme: { COLORS }, isActive }) => css`
    background-color: ${COLORS.GRAY_600};
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    border-width: 1px;
    border-color: transparent;
    border-style: solid;
    height: 38px;
    width: 70px;
    margin-right: 12px;
    ${isActive &&
    css`
      border-color: ${COLORS.GREEN_700};
    `}
  `}
`

export const Title = styled.Text`
  ${({ theme: { COLORS, FONT, SIZE } }) => css`
    text-align: center;
    color: ${COLORS.WHITE};
    font-size: ${SIZE.SM};
    font-family: ${FONT.BOLD};
    text-transform: uppercase;
  `}
`
