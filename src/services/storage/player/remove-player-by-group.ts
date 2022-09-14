import AsyncStorage from '@react-native-async-storage/async-storage'

import { PLAYER_COLLECTION } from '../config'
import { getAllPlayersByGroup } from './get-all-players-by-group'

export async function removePlayerByGroup(playerName: string, group: string) {
  try {
    const groupPlayers = await getAllPlayersByGroup(group)

    const filteredPlayers = groupPlayers.filter((p) => p.name !== playerName)

    const updatedValue = JSON.stringify(filteredPlayers)
    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, updatedValue)
  } catch (error) {
    console.log(error)
    throw error
  }
}
