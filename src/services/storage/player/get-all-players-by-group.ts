import AsyncStorage from '@react-native-async-storage/async-storage'

import { PlayerDTO } from './PlayerDTO'
import { PLAYER_COLLECTION } from '../config'

export async function getAllPlayersByGroup(group: string): Promise<PlayerDTO[]> {
  try {
    const data = await AsyncStorage.getItem(`${PLAYER_COLLECTION}-${group}`)
    return data !== null ? JSON.parse(data) : []
  } catch (error) {
    console.log(error)
    throw error
  }
}
