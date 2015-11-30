import React from 'react';

require('./App.css');
import Hello from './Hello.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Hello />
    );
  }
}
