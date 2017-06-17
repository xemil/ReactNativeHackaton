
import { CHANGE_TEXTINPUT } from '../constants';

export function changedText(input) {
	return {
		type: CHANGE_TEXTINPUT,
		textInput: input
	};
}

export function changeTextInput(input) {
	return (dispatch) => dispatch(changedText(input));
}
