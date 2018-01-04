
export function moduleReducer(state=false, action) {
	switch (action.type) {
		case 'HIDE_MODULE':
			return action.payload
		default:
			return state;
	}
}
