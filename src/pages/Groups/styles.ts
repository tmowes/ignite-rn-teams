import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  ${({ theme: { COLORS } }) => css`
    flex: 1;
    background-color: ${COLORS.GRAY_600};
  `}
`

export const Title = styled.Text`
  ${({ theme: { COLORS } }) => css`
    color: ${COLORS.WHITE};
    font-weight: bold;
  `}
`
