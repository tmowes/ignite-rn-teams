import * as S from './styles'
import { TeamFilterProps } from './types'

export function TeamFilter(props: TeamFilterProps) {
  const { label, isActive = false, ...attrs } = props
  return (
    <S.Container isActive={isActive} {...attrs}>
      <S.Title>{label}</S.Title>
    </S.Container>
  )
}
