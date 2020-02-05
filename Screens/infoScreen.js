import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,ToastAndroid } from 'react-native';
import {Button, Card, CardItem} from 'native-base'
import AddDetail from './AddDetail'
import Realm from 'realm'
import realm from './realm'


export default class infoScreen extends React.Component{
   constructor(props){
       super(props)
       this.state={
           name:'DummyText',
           branch:'Dummybranch',
           rollNo:'DummyRolNo',
           index:0

       }
   }
     
   

  
    render(){
       
        let id=this.props.navigation.getParam('id','');
        console.log(id)
        dataToShow=realm.objects('tempSinfo')
        console.log(dataToShow[id])

        return(
      <View>
  




      </View>






        )
    }
}