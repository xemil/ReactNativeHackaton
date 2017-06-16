import React, { Component } from 'react';
import { View, Text, Button, TextInput } from 'react-native';

export default class Start extends Component{
    render(){
        return (
         <View>
            <Text>
              Scania TrackMe
            </Text>
            <TextInput
placeholder="Enter name"
onTextChanged={ (newValue) => this.setState(name)}>
</TextInput>
            <Button onPress={() => props.getCurrentPosition(props.name)} title='Start' />
            <Text>{this.state.name}</Text>
            //<Text>{props.locationData.data.coords.longitude}, {props.locationData.data.coords.latitude}</Text>
        </View>

        );
    }
} 


const styles = StyleSheet.create({
  counter: {
    padding: 30,
    alignSelf: 'center',
    fontSize: 26,
    fontWeight: 'bold',
  },
});