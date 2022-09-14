import styled, { css } from 'styled-components/native'

export const Container = styled.TextInput.attrs(({ theme: { COLORS } }) => ({
  placeholderTextColor: COLORS.GRAY_300,
}))`
  ${({ theme: { COLORS, FONT, SIZE } }) => css`
    flex: 1;
    min-height: 56px;
    max-height: 56px;
    background-color: ${COLORS.GRAY_700};
    color: ${COLORS.WHITE};
    border-radius: 6px;
    padding: 0 16px;
    font-family: ${FONT.REGULAR};
    font-size: ${SIZE.MD};
  `}
`
