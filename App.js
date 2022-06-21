import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Terms from './src/Init/Terms';
import UniPicker from './src/Login/UniPicker';
import Login from './src/Login/Login';
import Profile from './src/Profile/Profile';
import Home from './src/HomeScreen/Home';
import Catalogue from './src/Catalogue/Catalogue';
import Connections from './src/Connections/Connections';
import SplashScreen from './src/Init/SplashScreen';
import { HeaderTitle } from 'react-navigation-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="SplashScreen" component={SplashScreen} 
          options = {{header:()=> null}} />
        <Stack.Screen name="Terms" component={Terms} 
          options = {{header:()=> null}} />
        <Stack.Screen name="UniPicker" component={UniPicker} 
          options = {{header:()=> null}}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Catalogue" component={Catalogue}/>
        <Stack.Screen name="Connections" component={Connections}/>
        <Stack.Screen name="Profile" component={Profile}
          options = {{headerTitle: '', headerBackTitle: '', headerTintColor: 'white',headerStyle:{backgroundColor: '#0FBFBF'}}}/>
        <Stack.Screen name="Home" component={Home} 
          options = {{header:()=> null}}/>
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
