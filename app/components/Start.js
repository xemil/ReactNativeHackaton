import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';

export default class Start extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: ''
    };
  }

  onNameChanged(newValue){
     this.setState({name: newValue});
  }

  onSaveClick(){
    this.props.getCurrentPosition(this.state.name);
  }

    render(){
        return (
         <View>
            <Text style={styles.title}>
              Scania TrackMe
            </Text>
            <TextInput style={styles.editor}
placeholder="Enter name"
onChangeText={this.onNameChanged.bind(this)}>
</TextInput>
            <Button disabled={!this.state.name} onPress={this.onSaveClick.bind(this)} title='Start' />
            
            <Text>{this.props.locationData.coords?'Saved '+this.props.locationData.coords.longitude
              +', ':''} 
              {this.props.locationData.coords?this.props.locationData.coords.latitude:''}</Text>
        </View>

        );
    }
} 


const styles = StyleSheet.create({
  title: {
    padding: 30,
    alignSelf: 'center',
    fontSize: 26,
    fontWeight: 'bold',
  },
  editor: {
    height: 20,
    margin: 2
  }
});