// Help function to create reducer | it replace the switch statements
export default function createReducer(initialState, handlers) {
	return function reducer(state = initialState, action) {
	  if (handlers.hasOwnProperty(action.type)) {
		return handlers[action.type](state, action)
	  } else {
		return state
	  }
	}
}