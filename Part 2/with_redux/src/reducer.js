const defaultState = {
  term: '',
  items: []
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case 'CHANGE_TERM':
      return {
        term: action.term,
        items: state.items        
      };
    case 'ADD_ITEM':
      return {
        term: '',
        items: state.items.concat(state.term)
      }
    default:
      return state
  }
}
