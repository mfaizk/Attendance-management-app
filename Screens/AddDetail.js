import React from 'react';
import {StyleSheet, Text, View, Alert} from 'react-native';
import {Label, Input, Button} from 'native-base';
import realm from './realm'
import { TouchableOpacity } from 'react-native-gesture-handler';




export default class App extends React.Component {



    constructor(props) {
        super(props);
        this.state = {
            name: null,
            rollNo: null,
            branch: null,
           
        }
    }

    

    addStudent = () => {
        
      
      
                 realm.write(()=>{
                   realm.create('sInfo', {

                        name: this.state.name,
                        rollNo: this.state.rollNo,
                        branch:this.state.branch,
                        
                   })
                  
                  
                   })
                  
                
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
        backgroundColor: '#fff'
    },
    input: {
        flexDirection: 'row',
        backgroundColor: 'yellow',
        alignItems: 'center'
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'pink'

    },
    button: {
        height: 40,
        width: 50,
        justifyContent: 'center',
        borderRadius: 15,
        marginTop: 20,
        backgroundColor: '#2475B0'
    }
});


