import * as S from './styles'
import { ButtonIconProps } from './types'

export function ButtonIcon(props: ButtonIconProps) {
  const { icon, disabled = false, variant = 'PRIMARY', ...attrs } = props

  return (
    <S.Container disabled={disabled} {...attrs}>
      <S.Icon name={icon} variant={variant} />
    </S.Container>
  )
}
