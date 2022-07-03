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
import Search from './src/Search/Search';
import CreatePost from './src/Post/CreatePost';
import PostButton from './src/Post/PostButton';
import PostContextProvider from './src/ContextAPIs/PostContext';
import MyStories from './src/Stories/MyStories';
import CreateText from './src/Stories/CreateText';
import PopBubble from './src/PopBubble/PopBubble';
import MarketSwitch from './src/PopBubble/MarketSwitch';
import MarketSwitchContextProvider from './src/ContextAPIs/MarketSwitchContext';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <MarketSwitchContextProvider>
    <PostContextProvider>
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="SplashScreen" component={SplashScreen} 
          options = {{header:()=> null}} />
        <Stack.Screen name="Terms" component={Terms} 
          options = {{header:()=> null}} />
        <Stack.Screen name="UniPicker" component={UniPicker} 
          options = {{header:()=> null}}/>
        <Stack.Screen name="Login" component={Login}
        options = {{headerBackTitle: '', headerTitle: '', headerTintColor: 'white',headerStyle:{backgroundColor: '#0FBFBF'}}}/>
          <Stack.Screen name="CreatePost" component={CreatePost}
          options = {{headerBackTitle: '',headerTintColor: 'white',headerStyle:{backgroundColor: '#0FBFBF'},
          headerRight: ()=>(
            <PostButton />
          )}}/>
        <Stack.Screen name="Catalogue" component={Catalogue}
          options = {{headerStyle:{backgroundColor: '#0FBFBF'}, headerTintColor: 'white'}}/>
        <Stack.Screen name="Connections" component={Connections}
           options = {{headerStyle:{backgroundColor: '#0FBFBF'}, headerTintColor: 'white'}}/>
        <Stack.Screen name="Profile" component={Profile}
          options = {{headerTitle: '', headerBackTitle: '', headerTintColor: 'white',headerStyle:{backgroundColor: '#0FBFBF'}}}/>
        <Stack.Screen name="Home" component={Home} 
          options = {{header:()=> null}}/>
          <Stack.Screen name="Search" component={Search}
        options = {{headerBackTitle: '', headerTitle: '',headerTintColor: 'white',headerStyle:{backgroundColor: '#0FBFBF'}}}/>
        <Stack.Screen name="MyStories" component={MyStories}
        options = {{headerBackTitle: '', headerTitle: 'My Stories',headerTintColor: 'white',headerStyle:{backgroundColor: '#0FBFBF'}}}/>
        <Stack.Screen name="CreateText" component={CreateText} options = {{header: ()=> null}}/>
        <Stack.Screen name = "PopBubble" component={PopBubble} 
          options = {{headerBackTitle: '', headerTitle: '',headerTintColor: '#0FBFBF',headerStyle:{backgroundColor: '#F6ADC6'}, 
          headerRight: ()=>(
          <MarketSwitch/>  
          )}}/>
      </Stack.Navigator>
    </NavigationContainer>
    </PostContextProvider>
    </MarketSwitchContextProvider>
  );
}


