import { UsersThree } from 'phosphor-react-native'
import styled, { css } from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  ${({ theme: { COLORS } }) => css`
    width: 100%;
    background-color: ${COLORS.GRAY_500};
    border-radius: 6px;
    flex-direction: row;
    align-items: center;
    padding: 24px;
    margin-bottom: 12px;
  `}
`

export const Title = styled.Text`
  ${({ theme: { COLORS, SIZE, FONT } }) => css`
    color: ${COLORS.GRAY_200};
    font-size: ${SIZE.MD};
    font-family: ${FONT.REGULAR};
  `}
`

export const ButtonIcon = styled(UsersThree).attrs(({ theme: { COLORS } }) => ({
  color: COLORS.GREEN_700,
  size: 32,
  weight: 'fill',
}))`
  margin-right: 20px;
`
