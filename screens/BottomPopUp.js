import React,{component} from 'react'
import {AppRegistry, StyleSheet, Text, View,Modal,TouchableWithoutFeedback } from 'react-native'

export class BottomPopUp extends React.component{
    constructor(props){
        super(props)
        this.state={show:false}
      }
  show=()=>{
    this.setState({show:true})
  }
  close=()=>{
    this.setState({show:false})
  }
  render(){
    let{show}= this.state
    return(
      <Modal animationType={'fade'} transparent={true} visible={show} onRequestClose={this.close}> 
      <View style={[{flex:1},{backgroundColor:'000000AA'},{justifyContent:'flex-end'}]}> 
      </View>

      </Modal>
    )
  }
}
