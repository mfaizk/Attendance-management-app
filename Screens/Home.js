import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,ToastAndroid } from 'react-native';
import {Button, Card, CardItem} from 'native-base'
import AddDetail from './AddDetail'
import Realm from 'realm'
import realm from './realm'
import { FlatList } from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo'



export default class Home extends React.Component {
       constructor(props){
         super(props);
         this.state={
          
         }
       }


       static navigationOptions={
        headerRight:()=>(
            <TouchableOpacity
            onPress={()=>{
              
              
            }}
            >
        <Entypo
        name='cycle'
        size={20}
        />
            </TouchableOpacity>
        )
    }

   dataTransfer=()=>{
     var temporaryInfo=realm.objects('tempSinfo')
     if (temporaryInfo.length===0) {
       
     
    ToastAndroid.show('loading',ToastAndroid.SHORT);
    let tempResult = realm.objects('sInfo');
    let testing = realm.objects('sInfo');
              let testLength =testing.length
              console.log(testLength)
              let tempData=Array.from(testing)
               
                console.log(tempData[1].branch)
              for (let index = 0; index <= testing.length; index++) {
                
                realm.write(()=>{
                  realm.create('tempSinfo', {

                       name:tempData[index].name ,
                       rollNo:tempData[index].rollNo,
                       branch:tempData[index].branch,
                       
                  })
                 
                  })
                
              }
    }
    ToastAndroid.show('Not Allowed to reload',ToastAndroid.SHORT);

   }


      
       presentColorFunc=()=>{
         var presentColor='green'
         this.setState({
           presentColor:presentColor
         })
       }



  render(){
    var result = realm.objects('sInfo');
   var finalData=Array.from(result)

    


   
    return (
    <View style={styles.container}>
    
    <View style={{flex:1,backgroundColor:'pink'}}>
    <FlatList
    data={finalData}
    renderItem={({item})=>
  <View>
    <Card style={{flexDirection:'row',flex:1}}>
      
      <View style={styles.badge}>
      <Text style={{fontSize:40}}>
        {item.name[0].toUpperCase()}
      </Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>
          {item.name}
        </Text>
        <Text>
          {item.branch}
        </Text>
        <Text style={styles.infoText}>
          {item.rollNo}
        </Text>


      </View>

      
        <View style={styles.attendanceContainer}>
          
          <TouchableOpacity style={[styles.attendanceButton,{backgroundColor:this.state.presentColor}]}
          onPress={()=>{ 
           this.presentColorFunc()

          }}
          >
          <Entypo
          name='check'
          size={30}
          /></TouchableOpacity>
             <TouchableOpacity style={styles.attendanceButton}>
          <Entypo
          name='cross'
          size={30}
          /></TouchableOpacity>
        

        </View>
             
           

      
      
    </Card>
  </View>

  }
  keyExtractor={(item,index)=>index.toString()}
    
    />

  </View>



  <View>
      <Button
      bordered
      color='black'
      rounded
      large
      onPress={()=>{
          this.props.navigation.navigate('AddDetail')
         
          console.log(result)
          console.log(finalData)

      }}
      >
          <Text>
              ClickMe
          </Text>
      
      </Button>
  </View>

  <Button  
  onPress={()=>{
    this.dataTransfer()
  }}
  >
    <Text>
      refresh
    </Text>
  </Button>
  
 
    </View>
  );
}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    
  },
  badge:{
    alignItems:'center',
    justifyContent:'center',
    borderWidth:3,
    borderColor:'black',
    height:55,
    width:55,
    borderRadius:55
  },
  cardContainer:{
    flexDirection:'row',
    height:55,
    borderColor:'black'
  },
  infoContainer:{
    flexDirection:'column',
    borderRadius:2,
    borderWidth:2,
    borderColor:'black',
    flex:3,
    alignItems:'flex-start',
    marginLeft:30

  },
  infoText:{
    fontSize:15
    

  },
  attendanceContainer:{
    flex:2,
    flexDirection:'row',
    borderWidth:1,
    borderColor:'black',
    justifyContent:'center',
    alignContent:'center',
  

  },
  attendanceButton:{
    flex:1,
    borderColor:'black',
    borderWidth:1,
    justifyContent:'center',
    alignContent:'center',

    
  }
 
});


