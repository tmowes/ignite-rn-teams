import { getAllPlayersByGroup } from './get-all-players-by-group'
import { PlayerDTO } from './PlayerDTO'

export async function getPlayersByTeamAndByGroup(
  team: string,
  group: string,
): Promise<PlayerDTO[]> {
  try {
    const storedPlayers = await getAllPlayersByGroup(group)
    return storedPlayers.filter((p) => p.team === team)
  } catch (error) {
    console.log(error)
    throw error
  }
}
