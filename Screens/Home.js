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
         prevdate:0,
         CurrentDate:'',
         edata:''
      

          
         }
       }
    
      componentDidMount(){

        const { navigation } = this.props;
          
        this.focusListener = navigation.addListener('willFocus', () => {
         
          var firstTimeDataWrite=realm.objects('tempDate')
          if (firstTimeDataWrite.length===0) {
            var now = new Date()
        var CDate =now.getDate()
      this.setState({
        CurrentDate:CDate
      })
        
            realm.write(()=>{
             realm.create('tempDate', {
              curDate:0,
               counter:0
                  
                  
             })
            
            
             })
     
           }
             
            
          
         








      var CompareData=realm.objects('tempDate')
      var now = new Date()
      var CDate =now.getDate()
      var stringDateFor=CompareData[0].curDate
      
      var storedDate=Number(stringDateFor)
        
        var datatest= realm.objects('tempDate')
        

      if (storedDate!=CDate) {
        var CompareData=realm.objects('tempDate')
        var now = new Date()
        var CDate =now.getDate()
        
        var updateDate= realm.objects('tempDate')
        var DataUpdater = updateDate[0]
        
        realm.write(()=>{
       DataUpdater.curDate=CDate
          
      })
      this.forceUpdate()
        this.dataTransfer()

    } 
    var result = realm.objects('tempSinfo');
    let fData=Array.from(result)
    this.setState({
      edata:fData
    })
              
            
            });
            
           


     
       
    }
     
        
    






   dataTransfer=()=>{
     var temporaryInfo=realm.objects('tempSinfo')
    
       
     
    ToastAndroid.show('Refreshing data for today',ToastAndroid.SHORT);
    

    realm.write(()=>{
      let tempStudent =realm.objects('tempSinfo')
    realm.delete(tempStudent);
  
    })
    
    let permanentObject = realm.objects('sInfo')
        
      
             this.setState({permanentObject})
           
           
             for(let i=0;i<permanentObject.length;i++){
              realm.write(()=>{
                realm.create('tempSinfo', {
                  id:i,
                   name : permanentObject[i].name,
             branch : permanentObject[i].branch,
             rollNo : permanentObject[i].rollNo
                  })
                 
                  })}
                 let temporaryDataResult=realm.objects('tempSinfo')
               
           this.forceUpdate()
          

   }
   todayDate=()=>{
   

   }


      
       presentColorFunc=(rNUmber,index)=>{

        var currentTime = new Date();

        var currentOffset = currentTime.getTimezoneOffset();
        
        var ISTOffset = 330;   // IST offset UTC +5:30 
        
        var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset)*60000);
        console.log(ISTTime)
     var stringDate=ISTTime.toString()







       var id=index
        var now = new Date()
        var CDate =now.getDate().toString()
       var RollNo=rNUmber.toString()
        realm.write(()=>{
          realm.create('pData', {

            date:CDate ,
            rollNo:RollNo,
              wholeDate:stringDate
               
          })
        })
        var data = realm.objects('pData')
        console.log(data)




        let deleteElementId=id
        
        
        let itemList=realm.objects('tempSinfo')
        
         let itemToDelete=itemList[id]
     
        

         realm.write(()=>{
           realm.delete(itemToDelete)
         })
         this.forceUpdate()





       
       }


   


       removeStudentNameFromList=(rNUmber,index)=>{
          
        var currentTime = new Date();

        var currentOffset = currentTime.getTimezoneOffset();
        
        var ISTOffset = 330;   // IST offset UTC +5:30 
        
        var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset)*60000);
        console.log(ISTTime)
     var stringDate=ISTTime.toString()







       var id=index
        var now = new Date()
        var CDate =now.getDate().toString()
       var RollNo=rNUmber.toString()
        realm.write(()=>{
          realm.create('aData', {

            date:CDate ,
            rollNo:RollNo,
              wholeDate:stringDate
               
          })
        })
        var data = realm.objects('aData')
        console.log(data)

   





        
        let deleteElementId=id
        
        
         let itemList=realm.objects('tempSinfo')
         
          let itemToDelete=itemList[id]
      
         

          realm.write(()=>{
            realm.delete(itemToDelete)
          })
          this.forceUpdate()
          

       }
       

  render(){
    var result = realm.objects('tempSinfo');
   let finalData=Array.from(result)
  
   

    


   
    return (
    <View style={styles.container}>
    
    <View style={{flex:1,backgroundColor:'#0A79DF'}}>
    <FlatList
    data={finalData}
    extraData={this.state.edata}
  
    renderItem={({item,index})=>
    
  <View>
    <Card style={styles.cardContainer}>
      
      <View style={styles.badge}>
    
      <Text style={{fontSize:40}}>
        {item.name[0].toUpperCase()}
      </Text>
      
      </View>
         
      <View style={styles.infoContainer}>
        <TouchableOpacity
        onPress={()=>{
          this.props.navigation.navigate('infoScreen',{
            id:index
          })
        }}
        >
        <Text style={styles.infoText}>
        Name: {item.name}
        </Text>
        <Text>
          Branch: {item.branch}
        </Text>
        <Text style={styles.infoText}>
         Roll no: {item.rollNo}
        </Text>
       </TouchableOpacity>

      </View>
    
      
        <View style={styles.attendanceContainer}>
          
          <TouchableOpacity style={styles.attendanceButton}
          onPress={()=>{
            let id=index
           this.presentColorFunc(item.rollNo,id)
           
          }}
          >
          <Entypo
          name='check'
          size={30}
          color='green'
          /></TouchableOpacity>
             <TouchableOpacity style={styles.attendanceButton}
             onPress={()=>{
               let id=index
              this.removeStudentNameFromList(item.rollNo,id)
              
             }}
             >
          <Entypo
          name='cross'
          size={30}
          color='red'
          /></TouchableOpacity>
        

        </View>
             
           

      
      
    </Card>
   
  </View>
  
  }
  keyExtractor={(item,index)=>index.toString()}
    


    />
    

  </View>

  <View style={styles.buttonView}>

  <Button  style={styles.addButton}
  
  onPress={()=>{
    this.props.navigation.navigate('MainDataEditLIst')
  }}>
    <Entypo
    name='pencil'
    size={40}
    />
  </Button>
  


 <Button style={styles.addButton}
  onPress={()=>{
    this.props.navigation.navigate('AddDetail')
   

}}
 >
   <Entypo
   name='plus'
   size={40}
   />
  </Button>
  </View>

  

  <Button  
  onPress={()=>{
    let MainData = realm.objects('sInfo');
    
    let tempData =realm.objects('tempSinfo')
   
  
    this.dataTransfer()
   
  
  //  ToastAndroid.show('Not Allowed to reload',ToastAndroid.SHORT);
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
    borderWidth:2,
    borderColor:'#3C40C6',
    height:60,
    width:60,
    borderRadius:60
  },
  cardContainer:{
    flex:1,
    flexDirection:'row',
    borderRadius:10,
    borderColor:'black',
    height:75,
    justifyContent:'center',
    alignItems:'center'

    

  },
  infoContainer:{
    flexDirection:'column',
    
    borderColor:'black',
    flex:3,
    alignItems:'flex-start',
    marginLeft:30,
    

  },
  infoText:{
    fontSize:15,
   marginBottom:4
    

  },
  attendanceContainer:{
    flex:2,
    flexDirection:'row',
  
    borderColor:'black',
    justifyContent:'center',
    alignContent:'center',
  

  },
  attendanceButton:{
    flex:1,
    borderColor:'black',
    margin:10,
   
    justifyContent:'center',
    alignContent:'center',

    
  },
  buttonView:{
  
   flexDirection:'row',
   justifyContent:'space-between',
   backfaceVisibility:'visible'

    
  },
  addButton:{
    width:60,
    height:60,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:50
   
  }
 
});


