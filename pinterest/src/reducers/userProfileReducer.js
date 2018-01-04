import { GET_USER_PROFILE } from '../Constants';

export function userProfileReducer(state={}, action) {
	switch (action.type) {
		case GET_USER_PROFILE:
			console.log('I got hit in the reducer');
			console.log(action.payload);
			return action.payload

		default:
			return state;
	}
}
