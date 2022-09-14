import AsyncStorage from '@react-native-async-storage/async-storage'

import { GROUP_COLLECTION, PLAYER_COLLECTION } from '../config'
import { getAllGroups } from './get-all-groups'

export async function removeGroup(group: string) {
  try {
    const storedGroups = await getAllGroups()

    const filteredGroups = storedGroups.filter((g) => g !== group)

    const updatedGroupsValue = JSON.stringify(filteredGroups)
    await AsyncStorage.setItem(GROUP_COLLECTION, updatedGroupsValue)
    await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${group}`)
  } catch (error) {
    console.log(error)
    throw error
  }
}
