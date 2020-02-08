import React from 'react';
import {View,StyleSheet,Text} from 'react-native'
import realm from './realm';
import { Form, Label, Input, Button } from 'native-base';
import { TextInput } from 'react-native-gesture-handler';


export default class EditScreen extends React.Component{
    static navigationOptions = {
        title: 'Edit',
      };
   constructor(props){
       super(props)
       this.state={
           name:'DummyName',
           branch:'DummyBranch',
         
       }
   }
    
           UNSAFE_componentWillMount(){
        let id=this.props.navigation.getParam('id','');
        console.log(id)
        let dataToEdit=realm.objects('sInfo')
           console.log(dataToEdit[id])
           this.setState({
               name:dataToEdit[id].name,
               branch:dataToEdit[id].branch,
               
           })

           save=()=>{
            
            
           
           
           var wholeDbData=realm.objects('sInfo')
           var dataToEdit=wholeDbData[id]
           console.log(dataToEdit)

          realm.write(()=>{
              dataToEdit.name = this.state.name,
              dataToEdit.branch= this.state.branch
             
              
          })
          this.forceUpdate()
          var newDbData = realm.objects('sInfo')
          var newData = newDbData[id]
          console.log(newData)
             
              
    
           
           }
         
    }
   
   
    render(){
       





        return(
           
             <View style={styles.mainContainer}>
               <View style={styles.inputContainer}>
                   <Text style={styles.header}>Name:   </Text>
                   <TextInput style={styles.textInput}
                   keyboardType='default'
                   onChangeText={ name=>this.setState({name})}
                   >
        <Text>{this.state.name}</Text>
                   </TextInput>
               </View>

               <View style={styles.inputContainer}>
                   <Text style={styles.header}>Branch: </Text>
                   <TextInput style={styles.textInput}
                   keyboardType='default'
                   onChangeText={ branch=>this.setState({branch})}
                   >
        <Text>{this.state.branch}</Text>
                   </TextInput>
               </View>

              
                 <View style={styles.buttonContainer}>
               <Button style={styles.button}
               onPress={()=>{
                   save()
                   this.props.navigation.navigate('MainDataEditLIst')
               }}
               >
                   <Text>Save</Text>
               </Button>
               </View>
                
             </View>



        );
    }
}


const styles= StyleSheet.create({
    mainContainer:{
      flex:1,
      backgroundColor:'#0A79DF'
    
     
    },
    inputContainer:{
     flexDirection:'row',
     margin:5
    },
    header:{
    fontSize:18,
    },
    textInput:{
        flex:1,
        backgroundColor:'white',
        height:40,
        borderRadius:20
       

    },
    buttonContainer:{
     flex:0.5,
     
     alignItems:'center',
     
     backfaceVisibility:'visible'
     
    },
    button:{
        height:40,
        margin:15,
        width:65,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:18

    }
})