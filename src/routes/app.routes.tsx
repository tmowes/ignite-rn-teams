import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Groups } from '@pages/Groups'
import { CreateGroup } from '@pages/CreateGroup'
import { Players } from '@pages/Players'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="groups" component={Groups} />
      <Screen name="new" component={CreateGroup} />
      <Screen name="players" component={Players} />
    </Navigator>
  )
}
