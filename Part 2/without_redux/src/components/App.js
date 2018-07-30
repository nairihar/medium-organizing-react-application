import React, { Component } from 'react';
import List from './List';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: []
    };
  }

  onChange(event) {
    this.setState({ term: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    const { term, items } = this.state;

    this.setState({
      term: '',
      items: [...items, term]      
    });
  }

  render() {
    const { term, items } = this.state;
    return (
      <div>
        <div>
          <input value={term} onChange={(e) => this.onChange(e)} />
          <button onClick={(e) => this.onSubmit(e)}>Submit</button>
        </div>
        <List items={items} />
      </div>
    );
  }
}
