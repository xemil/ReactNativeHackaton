import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect, bindActionCreators } from 'react-redux';
import { ActionCreators } from '../actions';

class AppContainer extends Component {
  constructor(props) {  
      this.state = {
          textFromApi: 'not fetched yet'
      };

      super(props);
  }
  
 
    render() {
        return (
            <View>
                <Text>I am the Container Component
                        Text from state: {this.state.textFromApi}
                </Text>
            </View>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect(() => { return {}, mapDispatchToProps })(AppContainer);