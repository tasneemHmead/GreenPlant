import React from 'react';
import {StyleSheet, SafeAreaView, Text, Button, View, Dimensions, Image, TouchableHighlight, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';
import { faStickyNote } from '@fortawesome/free-solid-svg-icons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
            <Animatable.Image 
            animation="fadeInUpBig"
            //duration="1500"
            source={require('../assets/logo.png')}
            style={styles.logo}
            resizeMode="stretch"
            />
            </View>
            <View style={{flex:2}}>
            <View style={styles.button}>
                    <TouchableOpacity onPress={()=>navigation.navigate("FirstPage")}  style={styles.facebook}>
                    <FontAwesome 
                            name="facebook-square"
                            color="#ffff"
                            size={30}
                            style={styles.icon}
                        />
                        <Text style={styles.textFacebook}>Continue with Facebook</Text>
                        <MaterialIcons  name="navigate-next" color="#ffff" size={20}/>
                    </TouchableOpacity>
                </View> 
                <View style={styles.button}>   
                    <TouchableOpacity onPress={()=>navigation.navigate("SignUp")}  style={styles.SignUp}>
                        <Text style={styles.textSign}>I'll use Email</Text>
                        <MaterialIcons  name="navigate-next" color="#6EB845" size={20}/>
                    </TouchableOpacity>
                </View>   
            </View> 
            <View style={styles.checkPolicy}>
                <Text style={styles.textPolicy}>Already have an acount? </Text>
                <TouchableOpacity onPress={()=>navigation.navigate("Login") }>
                    <Text style={{color:'#33691E'}}>Login here </Text>
                </TouchableOpacity>
            </View>   
        </View>
    )   
}

export default Home

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;


const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#CBEAD1',
      alignItems: 'center',
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 30,
        marginBottom:10, 
        
    },
    logo: {
        width: height_logo+20,
        height: height_logo+120
    },
    icon:{
        paddingRight:5,
    },

    button:{
        display: 'flex',
        alignItems:'center',
        justifyContent:'center',
        /*margin:5,*/
    },
    facebook: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'row',
        /*marginTop: 20,*/
        width: '100%',
        height: 60,
        borderRadius: 25,
        backgroundColor:'#6EB845',
        /*borderBottomWidth: 3,
        borderRightWidth: 3,
        borderRightColor: '#f2f2f2',
        borderBottomColor: '#f2f2f2',*/
        /*marginHorizontal:height/9*/
    },
    SignUp: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'row',
        marginTop: 15,
        width: '100%',
        height: 60,
        borderRadius: 25,
        borderWidth:1.5,
        borderColor:'#6EB845',

        /*borderBottomWidth: 3,
        borderRightWidth: 3,
        borderRightColor: '#f2f2f2',
        borderBottomColor: '#f2f2f2',*/
    },
    textFacebook: {
        fontSize: 20,
        fontWeight: 'bold',
        color:"#fff",
    },
   
    textSign: {
        fontSize: 18,
        color:'#6EB845',
    },
    checkPolicy:{
        flex:1,
        /*alignItems:'flex-start',*/
        marginTop:35,/*
        marginBottom:15,*/
        flexDirection:'row'
    },
    textPolicy:{
        fontSize:16,
        color: '#6EB845',
    },
  });