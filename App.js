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
import { useState } from 'react';

const Stack = createNativeStackNavigator();

export default function App() {

  const [postData, setPostData] = useState('Init');
  const [isPost, setIsPost] = useState(false);

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
        <Stack.Screen name="CreatePost" component={CreatePost} initialParams={{'setPostData': setPostData, 'isPost': isPost}}
        options = {{headerBackTitle: '',headerTintColor: 'white',headerStyle:{backgroundColor: '#0FBFBF'},
        headerRight: ()=>(
          <PostButton setPostData = {setPostData} 
                      postData = {postData}
                      isPost = {isPost} 
                      setIsPost = {setIsPost}/>
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}


