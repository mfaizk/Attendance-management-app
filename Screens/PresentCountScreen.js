import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,ToastAndroid } from 'react-native';
import {Button, Card, CardItem} from 'native-base'
import AddDetail from './AddDetail'
import Realm from 'realm'
import realm from './realm'
import { FlatList } from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo'


export default class PresentCountScreen extends React.Component{
    static navigationOptions = {
        title: 'Present List',
      };
 render(){


    let rNo=this.props.navigation.getParam('rNumber','');
    console.log(rNo)

    var data=realm.objects('pData').filtered('rollNo=$0',rNo)
    console.log(data)
        
     var nameData= realm.objects('sInfo').filtered('rollNo=$0',rNo)
     console.log(nameData)
     var name=nameData[0].name
     console.log(name)
     return(
     <View style={styles.mainContainer}>
     <View style={styles.header}>
         <Text style={styles.headerText}>
         {name}  Present Data
         </Text>
     </View>
         <FlatList
         data={data}
         extraData={data}
         renderItem={({item,index})=>
         <View>
            <Card style={styles.card}>
            <View><Text style={styles.cardText}>
                {item.wholeDate}
                </Text></View>

            </Card>

         </View>
         }
         keyExtractor={(item,index)=>index.toString()}
         />

      
    

      
     </View>




     );
 }   
}

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:'#0A79DF'
    },
    header:{
        
        justifyContent:'center',
        alignItems:'center',
        height:55,
        borderRadius:30,
        backgroundColor:'#43BE31'

    },
    headerText:{
        fontSize:16

    },
    card:{
        height:50,
        justifyContent:'center',
        alignItems:'flex-start',
    


    },
    cardText:{
        fontSize:15

    },
})