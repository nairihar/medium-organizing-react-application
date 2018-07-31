import React from 'react';
import { connect } from 'react-redux'

const List = ({ items }) => (
  <ul>
    {
      items && items.map((item, index) => <li key={index}>{item}</li>)
    }
  </ul>
);

const mapStateToProps = (state) => ({
  items: state.items
});

export default connect(mapStateToProps)(List);
