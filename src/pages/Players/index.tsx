/* eslint-disable sonarjs/no-duplicate-string */
import { Alert, FlatList, TextInput } from 'react-native'
import { useCallback, useEffect, useRef, useState } from 'react'

import { useNavigation, useRoute } from '@react-navigation/native'

import { ButtonIcon } from '@components/ButtonIcon'
import { CustomInput } from '@components/CustomInput'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { TeamFilter } from '@components/TeamFilter'
import { PlayerCard } from '@components/PlayerCard'
import { EmptyListMessage } from '@components/EmptyListMessage'
import { CustomButton } from '@components/CustomButton'
import { createPlayerByGroup } from '@services/storage/player/add-player-by-group'
import { AppError } from '@utils/AppError'
import { PlayerDTO } from '@services/storage/player/PlayerDTO'
import { getPlayersByTeamAndByGroup } from '@services/storage/player/get-players-by-team-and-by-group'
import { removePlayerByGroup } from '@services/storage/player/remove-player-by-group'
import { removeGroup } from '@services/storage/groups/remove-group'

import * as S from './styles'

export function Players() {
  const { navigate } = useNavigation()
  const { params } = useRoute()
  const { id } = params as { id: string }
  const inputRef = useRef<TextInput>(null)
  const [playerName, setPlayerName] = useState('')

  const [activeTeam, setActiveTeam] = useState('TIME A')
  const [players, setPlayers] = useState<PlayerDTO[]>([])

  const onAddPlayer = async () => {
    if (!playerName.trim()) {
      Alert.alert('Novo jogador', 'Informe o nome da jogador.')
      return
    }
    try {
      await createPlayerByGroup({ name: playerName, team: activeTeam }, id)
      loadPlayersByTeam()
      inputRef.current?.blur()
      setPlayerName('')
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Novo jogador', error.message)
      } else {
        Alert.alert('Novo jogador', 'Não foi possível adicionar o jogador.')
        console.log(error)
      }
    }
  }

  const loadPlayersByTeam = useCallback(async () => {
    try {
      const data = await getPlayersByTeamAndByGroup(activeTeam, id)
      setPlayers(data)
    } catch (error) {
      console.log(error)
      Alert.alert('Erro', 'Não foi possível carregar os jogadores do time selecionado.')
    }
  }, [activeTeam, id])

  const onRemovePlayer = useCallback(
    async (playerId: string) => {
      try {
        await removePlayerByGroup(playerId, id)
        await loadPlayersByTeam()
      } catch (error) {
        Alert.alert('Remover jogador', 'Não foi possível remover o jogador.')
        console.log(error)
      }
    },
    [id, loadPlayersByTeam],
  )

  const onRemoveGroup = useCallback(async () => {
    try {
      await removeGroup(id)
      navigate('groups')
    } catch (error) {
      Alert.alert('Remover grupo', 'Não foi possível remover o grupo.')
    }
  }, [id, navigate])

  const confirmRemoveGroup = useCallback(() => {
    Alert.alert('Remover grupo', 'Deseja realmente remover o grupo?', [
      {
        text: 'Não',
        style: 'cancel',
      },
      {
        text: 'Sim',
        onPress: () => onRemoveGroup(),
      },
    ])
  }, [onRemoveGroup])

  useEffect(() => {
    loadPlayersByTeam()
  }, [loadPlayersByTeam])

  return (
    <S.Container>
      <Header showBackButton />
      <Highlight title={id} subtitle="adicione a galera e separe os times" />

      <S.Form>
        <CustomInput
          inputRef={inputRef}
          placeholder="Nome do participante"
          autoCorrect={false}
          value={playerName}
          onChangeText={setPlayerName}
          onSubmitEditing={onAddPlayer}
          returnKeyType="done"
        />
        <ButtonIcon
          icon="add"
          onPress={onAddPlayer}
          disabled={playerName.trim().length < 3}
        />
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
        keyExtractor={({ name }) => name}
        renderItem={({ item: { name } }) => (
          <PlayerCard label={name} onRemove={() => onRemovePlayer(name)} />
        )}
        ListEmptyComponent={
          <EmptyListMessage message="Que tal cadastrar um jogador nesse time?" />
        }
      />
      <CustomButton
        variant="SECONDARY"
        label="Remover turma"
        onPress={confirmRemoveGroup}
      />
    </S.Container>
  )
}
