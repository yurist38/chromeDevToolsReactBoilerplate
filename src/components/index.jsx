import React, { Component } from 'react';
import { render } from 'react-dom';
import ColorPicker from './ColorPicker/ColorPicker';

class App extends Component {
  constructor() {
    super();
    this.state = {
      color: '#cccccc'
    }
  }

  onChangeColor(color) {
    this.setState({color: color.hex});
  }

  render() {
    return (
      <ColorPicker
        color={this.state.color}
        onChangeColor={this.onChangeColor.bind(this)}
      />
    );
  }
}


render(
  <App />,
  document.getElementById('app')
);
