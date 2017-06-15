
import { CHANGE_TEXTINPUT } from '../constants';

export function changeTextInput(input) {
    console.log('change input time to make a new state');
    console.log(input);
    return {
        type: CHANGE_TEXTINPUT,
        textInput: input
    }
}

