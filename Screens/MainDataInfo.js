import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,ToastAndroid } from 'react-native';
import {Button, Card, CardItem} from 'native-base'
import AddDetail from './AddDetail'
import Realm from 'realm'
import realm from './realm'
import { FlatList } from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo'



export default class MainDataInfo extends React.Component{
    static navigationOptions = {
        title: 'Info',
      };
  constructor(props){
      super(props)
      this.state={
          

      }
  }

  


    render(){

        let index=this.props.navigation.getParam('id','');
        console.log(index)
     var data=realm.objects('sInfo')
     var dataForId = data[index]
     var dataRollNo=dataForId.rollNo
     var presentData =realm.objects('pData').filtered('rollNo==$0',dataRollNo)
     var presentCount =presentData.length
     var absentData =realm.objects('aData').filtered('rollNo==$0',dataRollNo)
     var absentCount =absentData.length

        return(
          <View style={styles.mainContainer}>
              <View style={styles.partionView}>
        <Text>Name: {dataForId.name}</Text>
              </View>
              <View style={styles.partionView}>
        <Text>Branch: {dataForId.branch}</Text>
              </View>
              <View style={styles.partionView}>
        <Text>Roll No: {dataForId.rollNo}</Text>
              </View><TouchableOpacity
              onPress={()=>{
                  this.props.navigation.navigate('PresentCountScreen',{
                      rNumber:dataRollNo
                  })
              }}
              >
              <View style={styles.partionView}>
        <Text>Present Count: {presentCount}</Text>
              </View></TouchableOpacity>
              <TouchableOpacity
               onPress={()=>{
                this.props.navigation.navigate('AbsentCountScreen',{
                    rNumber:dataRollNo
                })
            }}
              >
              <View style={styles.partionView}>
        <Text>AbsentCount: {absentCount}</Text>
              </View></TouchableOpacity>




          </View>



        )
    }
}


const styles=StyleSheet.create({

    mainContainer:{
        flex:1,
        backgroundColor:'#0A79DF',
        justifyContent:'flex-start',
       
    },
    partionView:{
       
        backgroundColor:'#fff',
      
         margin:10,
         height:60,
         borderRadius:20,
         justifyContent:'center',
         alignItems:'center'
        

    }

})