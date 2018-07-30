import React, { Component } from 'react';
import { connect } from 'react-redux'

import List from './List';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: []
    };
  }

  onChange(event) {
    const term = event.target.value;
    this.props.changeTerm(term);
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.addItem();
  }

  render() {
    const { term } = this.props;
    return (
      <div>
        <div>
          <input value={term} onChange={(e) => this.onChange(e)} />
          <button onClick={(e) => this.onSubmit(e)}>Submit</button>
        </div>
        <List />
      </div>
    );
  }
}

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
