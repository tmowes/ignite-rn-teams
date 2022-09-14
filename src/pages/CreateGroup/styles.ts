import { UsersThree } from 'phosphor-react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

export const Container = styled(SafeAreaView)`
  ${({ theme: { COLORS } }) => css`
    flex: 1;
    background-color: ${COLORS.GRAY_600};
    padding: 24px;
  `}
`
export const Content = styled.View`
  flex: 1;
  justify-content: center;
`

export const UsersIcon = styled(UsersThree).attrs(({ theme: { COLORS } }) => ({
  color: COLORS.GREEN_700,
  size: 56,
}))`
  margin: 0 auto;
`

export const Title = styled.Text`
  ${({ theme: { COLORS, FONT, SIZE } }) => css`
    text-align: center;
    color: ${COLORS.WHITE};
    font-size: ${SIZE.MD};
    font-family: ${FONT.REGULAR};
  `}
`
