import { useState } from 'react'

import { useNavigation } from '@react-navigation/native'

import { CustomButton } from '@components/CustomButton'
import { CustomInput } from '@components/CustomInput'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'

import * as S from './styles'

export function CreateGroup() {
  const { navigate } = useNavigation()
  const [groupName, setGroupName] = useState('')

  const onCreateNewGroup = () => {
    if (!groupName) return
    console.log(groupName)
    navigate('players', { id: groupName })
  }

  return (
    <S.Container>
      <Header showBackButton />
      <S.Content>
        <S.UsersIcon />
        <Highlight title="Nova Turma" subtitle="crie uma turma para adicionar pessoas" />
        <CustomInput
          placeholder="Nome da turma"
          value={groupName}
          onChangeText={setGroupName}
        />
        <CustomButton
          label="Criar"
          onPress={onCreateNewGroup}
          disabled={groupName.length <= 3}
        />
      </S.Content>
    </S.Container>
  )
}
