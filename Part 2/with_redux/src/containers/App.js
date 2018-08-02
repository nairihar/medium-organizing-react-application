import { connect } from 'react-redux'

import App from '../components/App';

const mapStateToProps = (state) => ({
  term: state.term
});

const mapDispatchToProps = dispatch => {
  return {
    changeTerm: (term) => dispatch({
      type: 'CHANGE_TERM',
      term
    }),
    addItem: () => dispatch({
      type: 'ADD_ITEM'
    })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
