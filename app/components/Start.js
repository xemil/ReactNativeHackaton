import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, TextInput, Image, InteractionManager, Switch } from 'react-native';

export default class Start extends Component{
  constructor(props){
    super(props);
    this.state = {
      isSaving: false
    };
  }

componentDidMount(){
  InteractionManager.runAfterInteractions(() => {
    let that = this;
    setInterval(() =>
    {
      if(that.props.auto){
        that.onSaveClick(that.props);
      }
    }

    , 10000);
  });
}

  onNameChanged(newValue){
     this.props.changeTextInput(newValue);
  }

  onSaveClick(props){
    this.props = this.props || props;
    if(!this.props || !this.props.name){
      return;
    }

    this.props.getCurrentPosition(this.props.name);
  }

  componentWillUnmount() {
    this.clearInterval(this.state.timer);
  }

    render(){
        return (
         <View style={styles.flexView}>
           <Image source={require('../resources/griffin.png')} 
           style={styles.logo} />
            <Text style={styles.title}>
              Scania TrackMe
            </Text>
            <TextInput style={styles.editor}
placeholder="Enter name"
onChangeText={this.onNameChanged.bind(this)}>
</TextInput>
            <Button style={styles.buttonSave} disabled={!this.props.name} onPress={this.onSaveClick.bind(this)} title='Start' />
            
            <Text>{this.props.locationData.coords?'Saved '+this.props.locationData.coords.longitude
              +', ':''} 
              {this.props.locationData.coords?this.props.locationData.coords.latitude:''}</Text>
            <View style={{flex: 1, flexDirection: 'row', width: 200, height: 50}}>
              <Switch />
              <Text>Auto update</Text>
            </View>
        </View>

        );
    }
} 

const styles = StyleSheet.create({
  buttonSave: {
    flex: 1,
    margin: 5,
    width: 150
  },
  flexView:{
     flex: 1, 
     flexDirection: 'column',
     justifyContent: 'center',
     alignItems: 'center'
  },
  title: {
    flex: 2,
    margin: 5,
    alignSelf: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  logo: {
    margin: 0, 
    padding: 0, 
    flex: 4, 
    width: 400
  },
  editor: {
    flex: 1,
    margin: 5,
    width: 200
  }
});