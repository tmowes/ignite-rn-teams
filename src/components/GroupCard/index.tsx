import * as S from './styles'
import { GroupCardProps } from './types'

export function GroupCard(props: GroupCardProps) {
  const { label, ...attrs } = props
  return (
    <S.Container {...attrs}>
      <S.ButtonIcon />
      <S.Title>{label}</S.Title>
    </S.Container>
  )
}
