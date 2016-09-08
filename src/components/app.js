import React, { Component } from 'react';
import { Button, Icon } from 'stardust';

export default class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
