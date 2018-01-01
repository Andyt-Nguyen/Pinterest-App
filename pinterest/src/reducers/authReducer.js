import { LOGGED_IN, LOGGED_OUT } from '../Constants';

export function authReducer(state=false, action) {

	switch (action.type) {
		case LOGGED_IN:
			console.log('Hit this thise LOGGED_IN Type');
			console.log(action.payload);
			return action.payload;

		case LOGGED_OUT:
			console.log('Hit this LOGGED_OUT type');
			return action.payload;

		default:
			return state;
	}
};
