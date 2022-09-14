import { CustomButton } from '@components/CustomButton'
import { CustomInput } from '@components/CustomInput'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'

import * as S from './styles'

export function CreateGroup() {
  return (
    <S.Container>
      <Header showBackButton />
      <S.Content>
        <S.UsersIcon />
        <Highlight title="Nova Turma" subtitle="crie uma turma para adicionar pessoas" />
        <CustomInput placeholder="Nome da turma" />
        <CustomButton label="Criar" />
      </S.Content>
    </S.Container>
  )
}
