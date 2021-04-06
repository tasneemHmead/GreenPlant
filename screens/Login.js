import React,{useState} from 'react';
import {StyleSheet, SafeAreaView, Text, Button, View, Dimensions, Image, TouchableHighlight, TouchableOpacity,
         TextInput, 
         PlatformColor} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const Login = ({navigation}) => {
    /*state Array data contant string email,String password, 
    boolean check_textinputChange and boolean securetextEntry*/ 
    const [data,setData]= React.useState({
        email:'',
        password:'',
        check_textInputChange:false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true
    })

    /*  set change Email in data.Email  and data.check_textInputChange
        ...data=======> update of data
    */
    const textInputChange = (val)=>{
        if(val.lenght != 0){
            setData({
            ...data,
            email: val,
            check_textInputChange:true
            });}
        else{
            setData({
            ...data,
            email: val,
            check_textInputChange:false
            });
            }
    }
    // update value password in data.password
    const handlePasswordChange=(val)=>{
        setData({
            ...data,
            password:val,
        })
    }
    // fun control secureTextEntry default valur its true 
    const updatesecureTextEntry=()=>{
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Animatable.Image 
                //animation="fadeInUpBig"
                //duration="1500"
                source={require('../assets/logo.png')}
                style={styles.logo}
                resizeMode="stretch"
                />
            </View>
            <Animatable.View style={styles.footer} animation="fadeInUpBig">
               <View style={styles.action}>
                    <FontAwesome 
                            name="user-o"
                            color="#77EE39"
                            size={20}
                        />
                    <TextInput 
                        placeholder="Username or Email" style={styles.textInput} autoCapitalize="none"
                        onChangeText={(val)=>textInputChange(val)}
                    />                    
                    {data.check_textInputChange?//use variable check_textInputChange of appear check-circle
                    <Animatable.View animation="bounceIn">
                        <Feather name="check-circle" color="#77EE39" size={15} style={styles.featherPadding}/>
                    </Animatable.View> 
                    :null
                    }
               </View>
               <View style={styles.action}>
                    <Feather
                        name="lock"
                        color="#77EE39"
                        size={20}
                        />
                    <TextInput secureTextEntry={data.secureTextEntry?true:false} placeholder="Password" 
                    style={styles.textInput} autoCapitalize="none" 
                    onChangeText={(val)=> handlePasswordChange(val) }
                    />
                    <TouchableOpacity onPress={updatesecureTextEntry}>
                    {data.secureTextEntry?
                    <Feather name="eye-off" color="#77EE39" size={15} style={styles.featherPadding}></Feather>
                    :<Feather name="eye" color="#77EE39" size={15} style={styles.featherPadding}></Feather>}
                    </TouchableOpacity>
               </View>
               <TouchableOpacity style={styles.forget_password}>
                        <Text style={styles.textForgetPassword}>Forget Password?</Text>
                </TouchableOpacity>


               <View style={styles.button}>
                    <TouchableOpacity onPress={()=>navigation.navigate("FirstPage")}  style={styles.login}>
                        <Text style={styles.textLogIn}>Log In</Text>
                        <MaterialIcons  name="navigate-next" color="#ffff" size={20}/>
                    </TouchableOpacity>
                </View> 
                <View style={styles.button}>   
                    <TouchableOpacity onPress={()=>navigation.navigate("SignUp")}  style={styles.SignUp}>
                        <Text style={styles.textSign}>Create New Account</Text>
                        <MaterialIcons  name="navigate-next" color="#6EB845" size={20}/>
                    </TouchableOpacity>
                </View>   

            </Animatable.View>
        </View>
            )
                }
export default Login


const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;


const styles = StyleSheet.create({
    container: {
      flex: 3, 
      backgroundColor: '#CBEAD1',
    },
    header: {
        zIndex:1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:-35,
        marginTop:20
    },
    footer: {
        flex: 2,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 30,
        paddingHorizontal: 30,
        marginTop:0,
        paddingTop:30
    },
    logo: {
        width: height_logo,
        height: height_logo+55
    },
    action: {
        flexDirection: 'row',
        marginTop: 15,
        borderBottomWidth: 3,
        borderBottomColor: '#f2f2f2',
        borderLeftWidth: 3,
        borderLeftColor: '#f2f2f2',
        paddingBottom: 5,
        width: '100%',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor:'#E6FAF6',
        paddingLeft:10,
        paddingRight:10,
    },
    /*actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },*/
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#77EE39',
        paddingTop:15,
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    featherPadding : {
        paddingTop:5,

    },
    forget_password:{
        display: 'flex',
        alignItems:'flex-end',
        marginBottom:25,
    },
    textForgetPassword:{
        fontSize:12,
        color: '#6EB845',
    },
    button:{
        display: 'flex',
        alignItems:'center',
        justifyContent:'center',
        /*margin:5,*/
    },
    login: {
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
        borderWidth:1,
        borderColor:'#6EB845',
        backgroundColor:'#ffff',

        /*borderBottomWidth: 3,
        borderRightWidth: 3,
        borderRightColor: '#f2f2f2',
        borderBottomColor: '#f2f2f2',*/
    },
    textLogIn: {
        fontSize: 20,
        fontWeight: 'bold',
        color:"#fff",
    },
   
    textSign: {
        fontSize: 18,
        color:'#6EB845',
    },
  });
