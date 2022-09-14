import { FlatList } from 'react-native'
import { useState } from 'react'

import { useRoute } from '@react-navigation/native'

import { ButtonIcon } from '@components/ButtonIcon'
import { CustomInput } from '@components/CustomInput'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { TeamFilter } from '@components/TeamFilter'
import { PlayerCard } from '@components/PlayerCard'
import { EmptyListMessage } from '@components/EmptyListMessage'
import { CustomButton } from '@components/CustomButton'

import * as S from './styles'

const initialPlayers = [
  'Julius',
  'outro julius',
  'mais um julius',
  'julius 4',
  'julius 5',
  'julius 6',
  'julius 7',
  'julius 8',
  'julius 9',
  'julius 10',
  'julius 11',
  'julius 12',
  'julius 13',
  'julius 14',
  'julius 15',
  'julius 16',
  'julius 17',
  'julius 18',
  'julius 19',
  'julius 20',
  'julius 21',
  'julius 22',
  'julius 23',
  'julius 24',
  'julius 25',
  'julius 26',
  'julius 27',
  'julius 28',
  'julius 29',
  'julius 30',
  'julius 31',
  'julius 32',
  'julius 33',
  'julius 34',
  'julius 35',
  'julius 36',
  'julius 37',
  'julius 38',
  'julius 39',
  'julius 40',
  'julius 41',
  'julius 42',
  'julius 43',
  'julius 44',
  'julius 45',
  'julius 46',
  'julius 47',
  'julius 48',
  'julius 49',
  'julius 50',
  'julius 51',
  'julius 52',
  'julius 53',
  'julius 54',
  'julius 55',
  'julius 56',
  'julius 57',
  'julius 58',
  'julius 59',
  'julius 60',
  'julius 61',
  'julius 62',
  'julius 63',
  'julius 64',
  'julius 65',
  'julius 66',
  'julius 67',
  'julius 68',
  'julius 69',
  'julius 70',
  'julius 71',
  'julius 72',
  'julius 73',
  'ultimo julius',
]

export function Players() {
  const { params } = useRoute()
  const { id } = params as { id: string }
  const [activeTeam, setActiveTeam] = useState('TIME A')
  const [players, setPlayers] = useState<string[]>(initialPlayers)
  return (
    <S.Container>
      <Header showBackButton />
      <Highlight title={id} subtitle="adicione a galera e separe os times" />

      <S.Form>
        <CustomInput placeholder="Nome do participante" autoCorrect={false} />
        <ButtonIcon icon="add" />
      </S.Form>
      <S.HeaderPlayersList>
        <FlatList
          data={['TIME A', 'TIME B']}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TeamFilter
              label={item}
              isActive={activeTeam === item}
              onPress={() => setActiveTeam(item)}
            />
          )}
        />
        <S.NumberOfPlayers>{players.length}</S.NumberOfPlayers>
      </S.HeaderPlayersList>
      <FlatList
        data={players}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1 },
        ]}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <PlayerCard label={item} onRemove={() => true} />}
        ListEmptyComponent={<EmptyListMessage message="Que tal cadastrar um jogador?" />}
      />
      <CustomButton variant="SECONDARY" label="Remover turma" />
    </S.Container>
  )
}
