import * as S from './styles'
import { CustomButtonProps } from './types'

export function CustomButton(props: CustomButtonProps) {
  const { label, variant = 'PRIMARY', ...attrs } = props
  return (
    <S.Container variant={variant} {...attrs}>
      <S.Title>{label}</S.Title>
    </S.Container>
  )
}
