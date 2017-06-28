import { connect } from 'react-redux';

import { getCurrentPosition } from '../actions/location';
import fetchMyData from '../actions/mydata';
import Start from '../components/Start';
import { changeTextInput, changeAutoUpdate } from '../actions/input';

function mapDispatchToProps(dispatch) {
	return {
		fetchMyData: () => dispatch(fetchMyData()),
		getCurrentPosition: (name) => dispatch(getCurrentPosition(name)),
		changeTextInput: (name) => dispatch(changeTextInput(name)),
		changeAutoUpdate: (newValue) => dispatch(changeAutoUpdate(newValue))
	};
}

function mapStateToProps(state) {
	return {
		locationData: state.locationReducer.data,
		name: state.inputReducer.textInput || '',
		autoUpdate: state.inputReducer.autoUpdate
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Start);
