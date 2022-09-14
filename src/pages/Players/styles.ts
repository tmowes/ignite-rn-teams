import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

export const Container = styled(SafeAreaView)`
  ${({ theme: { COLORS } }) => css`
    flex: 1;
    background-color: ${COLORS.GRAY_600};
    padding: 24px;
  `}
`

export const Form = styled.View`
  ${({ theme: { COLORS } }) => css`
    width: 100%;
    background-color: ${COLORS.GRAY_700};
    flex-direction: row;
    justify-content: center;
    margin-bottom: 16px;
    border-radius: 6px;
  `}
`

export const HeaderPlayersList = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 32px 0 16px;
`

export const NumberOfPlayers = styled.Text`
  ${({ theme: { COLORS, FONT, SIZE } }) => css`
    color: ${COLORS.GRAY_200};
    font-size: ${SIZE.MD};
    font-family: ${FONT.BOLD};
  `}
`
