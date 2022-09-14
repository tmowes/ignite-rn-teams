import logoImg from '../../assets/logo.png'
import * as S from './styles'
import { HeaderProps } from './types'

export function Header(props: HeaderProps) {
  const { showBackButton = false } = props
  return (
    <S.Container>
      {showBackButton && (
        <S.BackButton>
          <S.BackIcon />
        </S.BackButton>
      )}
      <S.Logo source={logoImg} />
    </S.Container>
  )
}
