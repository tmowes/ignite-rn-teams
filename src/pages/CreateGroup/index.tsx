/* eslint-disable sonarjs/no-duplicate-string */
import { useState } from 'react'
import { Alert } from 'react-native'

import { useNavigation } from '@react-navigation/native'

import { CustomButton } from '@components/CustomButton'
import { CustomInput } from '@components/CustomInput'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { createGroup } from '@services/storage/groups/create-group'
import { AppError } from '@utils/AppError'

import * as S from './styles'

export function CreateGroup() {
  const { navigate } = useNavigation()
  const [groupName, setGroupName] = useState('')

  const onCreateNewGroup = async () => {
    if (!groupName.trim()) {
      Alert.alert('Novo grupo', 'Informe o nome da turma.')
      return
    }
    try {
      await createGroup(groupName)
      navigate('players', { id: groupName })
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Novo grupo', error.message)
      } else {
        Alert.alert('Novo grupo', 'Não foi possível criar o grupo.')
        console.log(error)
      }
    }
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
