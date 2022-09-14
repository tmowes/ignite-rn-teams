/* eslint-disable react/style-prop-object */
import { StatusBar } from 'expo-status-bar'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { ThemeProvider } from 'styled-components/native'
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'

import { theme } from '@styles/theme'
import { Loading } from '@components/Loading'

import { Routes } from './routes'

export function AppSrc() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  })

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        {fontsLoaded ? <Routes /> : <Loading />}
        <StatusBar style="light" backgroundColor="transparent" translucent />
      </ThemeProvider>
    </GestureHandlerRootView>
  )
}
