import * as types from '../actions/actionTypes';

export default function courseReducer(state = [], action) {
  switch(action.type) {
    case types.CREATE_COURSE:
      return [...state,   // spread operator passes all values of array
        Object.assign({}, action.course)
      ];
    default:
      return state;
  }
}