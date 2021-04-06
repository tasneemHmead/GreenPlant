import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, Button,Image ,View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import { createDrawerNavigator } from '@react-navigation/drawer';*/
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import 'react-native-gesture-handler';
/*import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';*/




import Home from './screens/Home';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import FirstPage from './screens/FirstPage';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';


const Stack = createStackNavigator();
/*const Tab = createMaterialBottomTabNavigator();*/
/*const Drawer = createDrawerNavigator();*/




export default function App({navigation}) {
  return (
    <NavigationContainer >
      <Stack.Navigator  screenOptions={{
    headerStyle:{backgroundColor:'#6EB845',},
    headerTintColor:'#fff',
    headerTitleStyle:{fontWeight:'bold'},
  }}>
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
        <Stack.Screen name="Login" component={Login}  options={{headerShown:false}}/>
        <Stack.Screen name="SignUp" component={SignUp}  options={{headerShown:false}}/>
        <Stack.Screen name="FirstPage" component={FirstPage} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};