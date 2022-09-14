import AsyncStorage from '@react-native-async-storage/async-storage'

import { AppError } from '@utils/AppError'

import { PLAYER_COLLECTION } from '../config'
import { getAllPlayersByGroup } from './get-all-players-by-group'
import { PlayerDTO } from './PlayerDTO'

export async function createPlayerByGroup(newPlayer: PlayerDTO, group: string) {
  try {
    const storedPlayers = await getAllPlayersByGroup(group)
    const playerAlreadyExists = storedPlayers.findIndex((p) => p.name === newPlayer.name)

    if (playerAlreadyExists >= 0) {
      throw new AppError('Esse jogador já está em um time aqui.')
    }

    const updatedValue = JSON.stringify([...storedPlayers, newPlayer])
    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, updatedValue)
  } catch (error) {
    console.log(error)
    throw error
  }
}
