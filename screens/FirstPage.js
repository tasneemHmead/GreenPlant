import * as React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,Dimensions,Modal,TouchableWithoutFeedback
} from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { createDrawerNavigator } from '@react-navigation/drawer';
/*import * as Animatable from 'react-native-animatable';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';*/
import { useFonts } from 'expo-font';
import * as Font from 'expo-font';



const Tab = createMaterialBottomTabNavigator();
const Drawer = createDrawerNavigator();

function Plants({navigation}) {
  return (
    <View style={{backgroundColor:'#E6FAF6',flex:1}}>
      <View style={{margin:20}}>
        <View style={[{flexDirection:'row'},{alignItems:'center'},{justifyContent:'space-between'},
        {marginTop:15}]}>
          <FontAwesome name="bars" size={25} backgroundColor="#ffff" color="#6EB845"
          onPress={()=>navigation.openDrawer()}  />
          <TouchableOpacity>
            <FontAwesome name="bell" size={25} backgroundColor="#ffff" color="#6EB845"
            onPress={()=>navigation.openDrawer()}  />  
          </TouchableOpacity>
        </View> 
        <Text style={styles.title}>My Plants</Text>
        <Text style={styles.sub_title}>You don't have plants yet.</Text>
      <View style={styles.addPlant}>
        <Text style={[{marginTop:12},{color:'#6EB845'}]}>Add Plant</Text>

        <TouchableOpacity style={styles.buttonAdd} >
          <FontAwesome name="plus" size={25} backgroundColor="#ffff" color="#6EB845"/>
        </TouchableOpacity>      

      </View>
      </View>

    </View>
  );
}


function Feede() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Feed Screen</Text>
      </View>
    );
  }
  
  function Article() {
    return (
      <View style={styles.container}>
        <Text>Article Screen</Text>
      </View>
    );
  }
  
  const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;


  
  function Profile() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
        <Text>tasneem</Text>
      </View>
    );
  }
  
  function Setting() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Notifications!</Text>
      </View>
    );
  }
  function Home() {
    return(
      <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#fff"
      labelStyle={{ fontSize: 12 }}
      barStyle={{backgroundColor:'#6EB845'}}
      shifting={true}
      >
        <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" color={color} size={26}   
            />
          ),
        }}
      />
       <Tab.Screen
        name="Feed"
        component={Plants}
        options={{
          tabBarLabel: 'My Plants',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="leaf" color={color} size={26} style={{marginRight:-10}} />
          ),
        }}
      />
       
      
      <Tab.Screen
        name="Notifications"
        component={Setting}
        options={{
          tabBarLabel: 'Setting',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="cogs" color={color} size={26} style={{marginRight:-10}} />
          ),
        }}
      />
      </Tab.Navigator>

    );
  }
export default class FirstPage extends React.Component {
  state = {
    fontsLoaded: false,
  };

  async loadFonts() {
    await Font.loadAsync({
      // Load a font `Montserrat` from a static resource
      Pacifico_Regular: require('./assets/fonts/Pacifico-Regular.ttf'),

      // Any string can be used as the fontFamily name. Here we use an object to provide more control
    });
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this.loadFonts();
  }

  render() {
    // Use the font with the fontFamily property after loading
    if (this.state.fontsLoaded) {

    return (
      <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Feede" component={Feede} />
      <Drawer.Screen name="Article" component={Article} />
  </Drawer.Navigator>
    );
}
else{return null}
  }}

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      justifyContent:'center',
      alignItems: 'center',
    },  
    title:{
      marginTop:20,
      fontSize:30,
      fontFamily:'Pacifico_Regular',
      color:'#33691E'
    },
    sub_title:{
      marginTop:15,
      marginLeft:15,
      justifyContent:'center',
      alignItems: 'center',
      color:'#6EB845',
    },
    addPlant:{
      flexDirection:'row',
      justifyContent:'flex-end',
      marginTop:(height/2),
    },
    buttonAdd:{
      marginHorizontal:10,
      backgroundColor:'#rgba(244,244,244,0.6)',
      height:50,
      width:40,
      justifyContent:'center',
      alignItems: 'center',
      borderRadius:15
    },
})
