import { MaterialIcons } from '@expo/vector-icons'
import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  ${({ theme: { COLORS } }) => css`
    width: 100%;
    height: 56px;
    background-color: ${COLORS.GRAY_500};
    border-radius: 6px;
    flex-direction: row;
    align-items: center;
    padding-left: 12px;
    margin-bottom: 12px;
  `}
`

export const Title = styled.Text`
  ${({ theme: { COLORS, FONT, SIZE } }) => css`
    flex: 1;
    color: ${COLORS.WHITE};
    font-size: ${SIZE.MD};
    font-family: ${FONT.REGULAR};
    margin-left: 12px;
  `}
`

export const Icon = styled(MaterialIcons).attrs(({ theme: { COLORS } }) => ({
  size: 24,
  color: COLORS.GRAY_200,
}))``
