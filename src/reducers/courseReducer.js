export default function courseReducer(state = [], action) {
  switch(action.type) {
    case 'CREATE_COURSE':
      return [...state,   // spread operator passes all values of array
        Object.assign({}, action.course)
      ];
    default:
      return state;
  }
}