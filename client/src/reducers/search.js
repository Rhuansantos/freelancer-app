import createReducer from '../lib/createReducer';
import * as types from '../actions/type';

export const searchedContent = createReducer({}, {
  [types.SET_SEARCHED](state, action) {
    let newState = {}
    action.Content.forEach( (recipe) => {
      let id = Content.href
      newState[id] = Object.assign({}, Content, { id });
    });
    return newState;
  },

});
