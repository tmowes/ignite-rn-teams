/* eslint-disable react/style-prop-object */
import { StatusBar } from 'expo-status-bar'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import { Groups } from '@pages/Groups'

export function AppSrc() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Groups />
      <StatusBar style="light" translucent backgroundColor="transparent" />
    </GestureHandlerRootView>
  )
}
