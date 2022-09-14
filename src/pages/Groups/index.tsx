import { useCallback, useState } from 'react'
import { FlatList } from 'react-native'

import { useFocusEffect, useNavigation } from '@react-navigation/native'

import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { GroupCard } from '@components/GroupCard'
import { EmptyListMessage } from '@components/EmptyListMessage'
import { CustomButton } from '@components/CustomButton'
import { getAllGroups } from '@services/storage/groups/get-all-groups'

import * as S from './styles'

const initialGroups = ['Galera do Ignite', 'Galera da Rocket']

export function Groups() {
  const { navigate } = useNavigation()
  const [groups, setGroups] = useState(initialGroups)

  const loadGroups = async () => {
    const data = await getAllGroups()
    setGroups(data)
  }

  useFocusEffect(
    useCallback(() => {
      loadGroups()
    }, []),
  )

  return (
    <S.Container>
      <Header />
      <Highlight title="Turmas" subtitle="jogue com a sua turma" />
      <FlatList
        data={groups}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => String(item)}
        renderItem={({ item }) => (
          <GroupCard label={item} onPress={() => navigate('players', { id: item })} />
        )}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={
          <EmptyListMessage message="Que tal cadastrar a primeira turma?" />
        }
      />
      <CustomButton label="Criar nova turma" onPress={() => navigate('new')} />
    </S.Container>
  )
}
