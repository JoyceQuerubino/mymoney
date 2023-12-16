import { ActivityIndicator } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { useFonts, Roboto_700Bold, Roboto_500Medium, Roboto_400Regular } from '@expo-google-fonts/roboto'
import { NavigationContainer } from '@react-navigation/native';
import theme from './src/theme';
import { AppRoutes } from './src/routes/app.routes';

export default function App(){

  const [ fontsLoaded ] = useFonts({ Roboto_700Bold, Roboto_500Medium, Roboto_400Regular})

  if(!fontsLoaded){
    return (<ActivityIndicator/>)
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </ThemeProvider>
  )
}
