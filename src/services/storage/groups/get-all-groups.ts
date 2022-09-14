import AsyncStorage from '@react-native-async-storage/async-storage'

import { GROUP_COLLECTION } from '../config'

export async function getAllGroups(): Promise<string[]> {
  try {
    const data = await AsyncStorage.getItem(GROUP_COLLECTION)
    return data !== null ? JSON.parse(data) : []
  } catch (error) {
    console.log(error)
    throw error
  }
}
