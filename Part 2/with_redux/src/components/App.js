import React, { Component } from 'react';

import List from '../containers/List';

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

export default App;