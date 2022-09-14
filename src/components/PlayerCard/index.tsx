import { ButtonIcon } from '@components/ButtonIcon'

import * as S from './styles'
import { PlayerCardProps } from './types'

export function PlayerCard(props: PlayerCardProps) {
  const { label, onRemove } = props
  return (
    <S.Container>
      <S.Icon name="person" />
      <S.Title>{label}</S.Title>
      <ButtonIcon icon="close" variant="SECONDARY" onPress={onRemove} />
    </S.Container>
  )
}
