import React,{useState} from 'react';
import {StyleSheet, SafeAreaView, Text, Button, View, Dimensions, Image, TouchableHighlight, TouchableOpacity,
         TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function SignUp({navigation}) {
    /*state Array data contant string email,String password, 
    boolean check_textinputChange and boolean securetextEntry*/ 
    const [data,setData]= React.useState({
        username:'',
        email:'',
        password:'',
        check_emailChange:false,
        check_userChange:false,
        secureTextEntry: true,
        isValidUser:true,
        isValidEmail: true,
        isValidPassword: true
    })

    const handleUsernameChange=(val)=>{
        if(val.trim().length >= 4){
            setData({
            ...data,
            username: val,
            check_userChange:true,
            isValidUser:true
            });}
        else{
            setData({
            ...data,
            username: val,
            check_userChange:false,
            isValidUser:false
            });
            }
    }

    /*  set change Email in data.Email  and data.check_emailChange
        ...data=======> update of data
    */
    const handleEmailChange = (val)=>{
            if(val.lenght != 0){
                setData({
                ...data,
                email: val,
                check_emailChange:true
                });}
            else{
                setData({
                ...data,
                email: val,
                check_emailChange:false
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

    // fun validation for input Usename 
    const handleValidUser=(val)=>{
        if(val.trim().length >= 4){
            setData({...data,isValidUser:true});
        }
        else{
        setData({...data,isValidUser:false});
        }

    }

    const handleValidPassword=(val)=>{
        if(val.trim().length>=8){
            setData({...data,isValidPassword:true});
        }
        else{
        setData({...data,isValidPassword:false});
        }

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
                        placeholder="Username" style={styles.textInput} autoCapitalize="none"
                        onChangeText={(val)=>handleUsernameChange(val)}
                        onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
                    />                    
                    {data.check_userChange?//use variable check_userChange of appear check-circle
                    <Animatable.View animation="bounceIn">
                        <Feather name="check-circle" color="#77EE39" size={15} style={styles.featherPadding}/>
                    </Animatable.View> 
                    :null
                    }
               </View>
               {data.isValidUser?null:
               <Animatable.View animation="fadeInLeft" duration={500}>
               <Text style={styles.errorMsg}>Username must be 4 characters long.</Text>
               </Animatable.View>
               }

               <View style={styles.action}>
                    <FontAwesome 
                            name="envelope-o"
                            color="#77EE39"
                            size={20}
                        />
                    <TextInput 
                        placeholder="Email" style={styles.textInput} autoCapitalize="none"
                        onChangeText={(val)=>handleEmailChange(val)}
                    />                    
                    {data.check_emailChange?//use variable check_textInputChange of appear check-circle
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
                    onEndEditing={(e)=>handleValidPassword(e.nativeEvent.text)}
                    />
                    <TouchableOpacity onPress={updatesecureTextEntry}>
                    {data.secureTextEntry?
                    <Feather name="eye-off" color="#77EE39" size={15} style={styles.featherPadding}></Feather>
                    :<Feather name="eye" color="#77EE39" size={15} style={styles.featherPadding}></Feather>}
                    </TouchableOpacity>
               </View>
               {data.isValidPassword?null:
               <Animatable.View animation="fadeInLeft" duration={500}>
               <Text style={styles.errorMsg}>Password must be 8 characters long.</Text>
               </Animatable.View>
               }

               

                <View style={styles.action}>
                    <TextInput secureTextEntry={true} placeholder="Confirm Password" 
                    style={styles.textInput} autoCapitalize="none" 
                    onChangeText={(val)=> handlePasswordChange(val) }
                    />
               </View>

               <View style={styles.checkPolicy}>
                    <TouchableOpacity >
                        <Text style={styles.textPolicy}>I accept the policy and terms</Text>
                    </TouchableOpacity>
                </View>

               <View style={styles.button}>
                    <TouchableOpacity onPress={()=>navigation.navigate("FirstPage")}  style={styles.signUp}>
                        <Text style={styles.textSignUp}>Sign Up</Text>
                        <MaterialIcons  name="navigate-next" color="#ffff" size={20}/>
                    </TouchableOpacity>
                </View> 

            </Animatable.View>
        </View>
            )
                }

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
        paddingTop:15
    },
    logo: {
        width: height_logo,
        height: height_logo+55
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
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
        paddingRight:10,    },
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
        fontSize: 12,
    },
    featherPadding : {
        paddingTop:5,

    },
    checkPolicy:{
        display: 'flex',
        alignItems:'flex-start',
        marginTop:15,
        marginBottom:15,
    },
    textPolicy:{
        fontSize:14,
        color: '#6EB845',
    },
    button:{
        display: 'flex',
        alignItems:'center',
        justifyContent:'center',
        /*margin:5,*/
    },
    signUp: {
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
    textSignUp: {
        fontSize: 20,
        fontWeight: 'bold',
        color:"#fff",
    },
  });
