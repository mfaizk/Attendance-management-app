import React from 'react';
import {StyleSheet, Text, View, Alert,ToastAndroid} from 'react-native';
import {Label, Input, Button} from 'native-base';
import realm from './realm'
import { TouchableOpacity } from 'react-native-gesture-handler';




export default class AddDetail extends React.Component {

    static navigationOptions = {
        title: 'Add Student detail',
      };


    constructor(props) {
        super(props);
        this.state = {
            name: null,
            rollNo: null,
            branch: null,
           
        }
    }

    

    addStudent = () => {
        
           if (this.state.name==null&&this.state.branch==null&&this.state.rollNo==null){

            ToastAndroid.show('Please fill all fields',ToastAndroid.SHORT);

           }else{
               var compareObject =realm.objects('sInfo')
               var compareRollNo=compareObject.filtered('rollNo=$0',this.state.rollNo)
               var compareLenght=compareRollNo.length
             if (compareLenght===0) {
                 
             
                 realm.write(()=>{
                   realm.create('sInfo', {

                        name: this.state.name,
                        rollNo: this.state.rollNo,
                        branch:this.state.branch,
                        
                   })
                  
                  
                   })
                   realm.write(()=>{
                    realm.create('tempSinfo', {
 
                         name: this.state.name,
                         rollNo: this.state.rollNo,
                         branch:this.state.branch,
                         
                    })
                   
                   
                    })
                }else{
                    ToastAndroid.show('Roll No already existed in data',ToastAndroid.SHORT);
                }
                }
                
    }

    



        
    

    

    render() {

   



        return (
            <View style={styles.container}>
                <View style={styles.input}>
                    <Label>
                        Name
                    </Label>
                    <Input
                        underlineColorAndroid='black'
                        onChangeText=
                        { ( name ) => { this.setState({ name: name })} }/>
                </View>
                <View style={styles.input}>
                    <Label>
                        Roll NO
                    </Label>
                    <Input
                        underlineColorAndroid='black'
                        keyboardType='decimal-pad'
                        onChangeText=
                        { ( rollNo ) => { this.setState({ rollNo:rollNo })} }/>
                </View>
                <View style={styles.input}>
                    <Label>
                        Branch
                    </Label>
                    <Input
                        underlineColorAndroid='black'
                        onChangeText=
                        { ( branch ) => { this.setState({ branch: branch })} }/>
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        bordered
                        large
                        style={styles.button}
                        onPress={() => {
                        this
                            .props
                            .navigation
                            .navigate('Home')
                            this.addStudent()
                    }}>
                        <Text>
                            SAVE
                        </Text>
                    </Button>
                </View>
               

            </View>
        );

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0A79DF'
    },
    input: {
        flexDirection: 'row',
       
        alignItems: 'center'
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
       backfaceVisibility:'visible'

    },
    button: {
        height: 40,
        width: 55,
        justifyContent: 'center',
        borderRadius: 15,
        marginTop: 20,
        backgroundColor: '#45CE30'
    },
   
});


