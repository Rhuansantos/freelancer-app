import * as types from './type';


export function setSearched({ content }) {
  return {
    type: types.SET_SEARCHED,
    content,
  }
}