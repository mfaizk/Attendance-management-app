import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,ToastAndroid,Alert } from 'react-native';
import {Button, Card, CardItem} from 'native-base'
import AddDetail from './AddDetail'
import Realm from 'realm'
import realm from './realm'
import { FlatList } from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo'



export default class MainDataEditLIst extends React.Component {
  static navigationOptions = {
    title: 'Main DataBase Page',
  };
    constructor(props){
      super(props);
      this.state={
          data:[]
       
       
      }
    }
    UNSAFE_componentWillMount(){

        var realmData=realm.objects('sInfo')
        this.setState({ data:realmData });
            const { navigation } = this.props;
          
            this.focusListener = navigation.addListener('didFocus', () => {
              this.setState({ data:realmData });
            });
        



     
       
    }

   PermanentDelete=(id)=>{
          
        
        let deleteElementId=id
        
        
         let itemList=realm.objects('sInfo')
         
          let itemToDelete=itemList[id]
         var nameToDelete=itemToDelete.name
         var rollNoDate=itemToDelete.rollNo
         console.log(nameToDelete)

          realm.write(()=>{
            realm.delete(itemToDelete)
          })
          this.forceUpdate()

         
       var tempDate=realm.objects('tempSinfo')

          var filteredDate=tempDate.filtered('name=$0',nameToDelete)

          realm.write(()=>{
            realm.delete(filteredDate)
          })
          this.forceUpdate()

          var attendanceData=realm.objects('pData')

          var filteredRollNo =attendanceData.filtered('rollNo=$0',rollNoDate)
        
          realm.write(()=>{
            realm.delete(filteredRollNo)
          })
          
          this.forceUpdate()


          var AbsentData=realm.objects('aData')

          var fRollNo =AbsentData.filtered('rollNo=$0',rollNoDate)
        
          realm.write(()=>{
            realm.delete(fRollNo)
          })
          
          this.forceUpdate()



       }  
     
        










    render(){
        let mainData=realm.objects('sInfo')
        return(

            <View style={styles.mainContainer}>
         <FlatList
         data={this.state.data}
         extraData={this.state}
         refreshing={true}
        
     
         renderItem={({item,index})=>
         <View>
              <Card style={styles.card}>
                  <View style={styles.textView}>
                      <TouchableOpacity 
                      onPress={()=>{
                          this.props.navigation.navigate('MainDataInfo',{
                              id:index
                          })
                      }}
                      >
               <Text>Name: {item.name}</Text>
               <Text>Branch: {item.branch}</Text>
               <Text>Roll No : {item.rollNo}</Text>
               </TouchableOpacity>
               </View>
               
               <View style={styles.buttonView} >
                   <Button style={styles.button}








                   onPress={()=>{
                    
                    Alert.alert(
                        'This action will delete Student data permanently from database',
                        'Be cautious before deleting data after this data is non-recoverable even Attendance data will be deleted',
                        [
                          
                          {
                            text: 'Cancel',
                            onPress: () => console.log('Cancel Pressed'),
                            style: 'cancel',
                          },
                          {text: 'OK', onPress: () => this.PermanentDelete(index)},
                        ],
                        {cancelable: false},
                      );







                   }}
                   >
                       <Entypo
                       name='box'
                       size={25}
                       color='red'
                       />
                   </Button>
               </View>

               <View style={styles.buttonView} >
                   <Button style={styles.button}
                  onPress={()=>{
                    this.props.navigation.navigate('EditScreen',{
                        id:index
                    })
                  }}
                   >
                       <Entypo
                       name='pencil'
                       size={25}
                       color='white'
                       />
                   </Button>
               </View>
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
        backgroundColor:'#0A79DF',
       

    },
    card:{
        flex:1,
        height:70,
        flexDirection:'row'

    },
    textView:{
        flex:6,
     
    },
    buttonView:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
       
        margin:7
        
        
        

    },
    button:{
       
        width:60,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:35,
        height:50,
        width:50,

    }
})