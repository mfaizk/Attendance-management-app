import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,ToastAndroid,FlatList } from 'react-native';
import {Button, Card, CardItem,Header} from 'native-base'
import AddDetail from './AddDetail'
import Realm from 'realm'
import realm from './realm'
import Entypo from 'react-native-vector-icons/Entypo'
import EditScreen from './EditScreen'


export default class infoScreen extends React.Component{
  static navigationOptions = {
    title: 'Info',
  };
   constructor(props){
       super(props)
       this.state={
           name:'DummyText',
           branch:'Dummybranch',
           rollNo:'DummyRolNo',
           index:0,
           
           pCount:'0'

       }
   }
   
   
   

  
    render(){


      //these statement are used to count the present 
      
        let index=this.props.navigation.getParam('id','');
       
        var dataToShow=realm.objects('tempSinfo')
       var rFinalNumber=dataToShow[index].rollNo
    
        
       
       
         
        var presentData=realm.objects('pData')
        let countToShowData = presentData.filtered('rollNo==$0',rFinalNumber)
        
       
        var presentCount= countToShowData.length
        
           
       //here count present statement ends

       //absent count
       var AbsentData=realm.objects('aData')
       let AbsentC = AbsentData.filtered('rollNo==$0',rFinalNumber)
       
      
       var AbsenttCount= AbsentC.length

       //here absent count statement end


      





       
        let id=this.props.navigation.getParam('id','');
      
        dataToShow=realm.objects('tempSinfo')
       
             //present list data here
             let roll=this.props.navigation.getParam('rollNumber','');
      var presentd=realm.objects('pData').filtered('rollNo=$0',roll)
          //end

          //Absent list data here
         
      var absentd=realm.objects('aData').filtered('rollNo=$0',roll)
         //end









        return(
      <View style={styles.mainContainer}>
         
              <Card style={styles.cardContainer}>
                 <Header style={styles.header}><Text style={styles.headerText}>Student info</Text></Header>

               <View style={styles.infoTextContainer}>
                       <Text style={styles.infoText}>
                        Name: {dataToShow[id].name}
                       </Text>
                       <Text style={styles.infoText}>
                        Branch: {dataToShow[id].branch}
                        </Text>
                        <Text style={styles.infoText}>
                        Roll No: {dataToShow[id].rollNo}
                        </Text>
                        <Text style={styles.infoText}>
                        Present Count:{presentCount}
                        </Text>
                        <Text style={styles.infoText}>
                        Absent Count: {AbsenttCount}
                        </Text>
               </View>
              </Card>
              <View style={styles.presentView}>
                <Text style={{fontSize:17,borderBottomWidth:1}}>Present List</Text>
                <FlatList
         data={presentd}
         extraData={presentd}
         renderItem={({item,index})=>
         
            <Card style={styles.card}>
            <View><Text style={styles.cardText}>
             {index+1}:   {item.wholeDate}
                </Text></View>

            </Card>

        
         }
         keyExtractor={(item,index)=>index.toString()}
         />


              </View>
              <View style={styles.absentView}>
              <Text style={{fontSize:17,borderBottomWidth:1}}>Absent List</Text>
              <FlatList
         data={absentd}
         extraData={absentd}
         renderItem={({item,index})=>
         
            <Card style={styles.card}>
            <View><Text style={styles.cardText}>
             {index+1}:   {item.wholeDate}
                </Text></View>

            </Card>

        
         }
         keyExtractor={(item,index)=>index.toString()}
         />
              </View>
              
                 


              </View>

             
              
         
       




    






        )
    }
}


const styles=StyleSheet.create({
    
mainContainer:{
  flex:1,
  backgroundColor:'black'
    },
  
  cardContainer:{
      backgroundColor:'white',
      height:170,
      justifyContent:'center',
    

  },
  infoTextContainer:{
      flex:1,
      flexDirection:'row',
      alignContent:'space-around',
      flexWrap:'wrap',
      
      
      justifyContent:'center',

  
  },
  infoText:{
      margin:10

  },
  header:{
   height:30,
   borderRadius:10,
   backgroundColor:'#0A79DF'

  },
  headerText:{

  },
  editButtonContainer:{


justifyContent:'flex-end',
alignItems:'flex-end',
height:60,
backfaceVisibility:'visible'

  },
  editButton:{
    backgroundColor:"#0A79DF",
    height:60,
    width:60,
    borderRadius:35,
    justifyContent:'center'
  },
  presentView:{
   flex:1,
   backgroundColor:'#45CE30',
   justifyContent:'center',
   alignItems:'center'
  },
  absentView:{
    flex:1,
    backgroundColor:'#E44236',
    justifyContent:'center',
    alignItems:'center'

  },
  card:{
   width:350,
   height:40,
   justifyContent:'center',
   alignItems:'center',
   borderRadius:60

  },
  cardText:{

  }


})