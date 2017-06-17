import { connect } from 'react-redux';

import { getCurrentPosition } from '../actions/location';
import fetchMyData from '../actions/mydata';
import Start from '../components/Start';
import { changeTextInput } from '../actions/changeTextInput';

function mapDispatchToProps (dispatch) {
	return {
		fetchMyData: () => dispatch(fetchMyData()),
		getCurrentPosition: (name) => dispatch(getCurrentPosition(name)),
		changeTextInput: (name) => dispatch(changeTextInput(name))
	};
}

function mapStateToProps (state) {
	return {
		locationData: state.locationReducer.data,
		name: state.textinputReducer.textInput || ''
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Start);
