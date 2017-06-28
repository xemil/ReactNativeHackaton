import { CHANGE_TEXTINPUT, CHANGE_AUTOUPDATE } from '../constants';

export function changedText(input) {
	return {
		type: CHANGE_TEXTINPUT,
		textInput: input
	};
}

export function changedAutoUpdate(autoUpdate) {
	return {
		type: CHANGE_AUTOUPDATE,
		autoUpdate: autoUpdate
	}
}

export function changeAutoUpdate(newValue) {
	return (dispatch) => dispatch(changedAutoUpdate(newValue));
}

export function changeTextInput(input) {
	return (dispatch) => dispatch(changedText(input));
}
