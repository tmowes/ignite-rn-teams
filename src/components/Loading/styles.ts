import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  ${({ theme: { COLORS } }) => css`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${COLORS.GRAY_600};
  `}
`

export const ActivityIndicator = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.COLORS.GREEN_700,
  size: 'large',
}))``
