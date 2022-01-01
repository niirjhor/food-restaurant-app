import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import COLORS from './components/consts/colors';
import BottomNavigator from './components/screens/Navigation/BottomNavigator';
import DetailScreen from './components/screens/Screens/DetailScreen';
import OnBoardScreen from './components/screens/Screens/OnBoardScreen';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="BoardScreen" component={OnBoardScreen} />
      <Stack.Screen name="Home" component={BottomNavigator} />
      <Stack.Screen name="DetailsScreen" component={DetailScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
