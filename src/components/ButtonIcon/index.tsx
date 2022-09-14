import * as S from './styles'
import { ButtonIconProps } from './types'

export function ButtonIcon(props: ButtonIconProps) {
  const { icon, variant = 'PRIMARY', ...attrs } = props

  return (
    <S.Container {...attrs}>
      <S.Icon name={icon} variant={variant} />
    </S.Container>
  )
}
