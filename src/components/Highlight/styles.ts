import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  margin: 32px 0;
`

export const Title = styled.Text`
  ${({ theme: { COLORS, FONT, SIZE } }) => css`
    color: ${COLORS.WHITE};
    text-align: center;
    font-size: ${SIZE.XL};
    font-family: ${FONT.BOLD};
  `}
`

export const SubTitle = styled.Text`
  ${({ theme: { COLORS, FONT, SIZE } }) => css`
    color: ${COLORS.GRAY_300};
    text-align: center;
    font-size: ${SIZE.MD};
    font-family: ${FONT.REGULAR};
  `}
`
