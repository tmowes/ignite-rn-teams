import AsyncStorage from '@react-native-async-storage/async-storage'

import { AppError } from '@utils/AppError'

import { GROUP_COLLECTION } from '../config'
import { getAllGroups } from './get-all-groups'

export async function createGroup(newGroup: string) {
  try {
    const storedGroups = await getAllGroups()
    const groupAlreadyExists = storedGroups.includes(newGroup)

    if (groupAlreadyExists) {
      throw new AppError('Já existe um grupo com esse nome.')
    }

    const updatedValue = JSON.stringify([...storedGroups, newGroup])
    await AsyncStorage.setItem(GROUP_COLLECTION, updatedValue)
  } catch (error) {
    console.log(error)
    throw error
  }
}
