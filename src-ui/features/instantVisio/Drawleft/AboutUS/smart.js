import React, { Component } from 'react';
import Orientation from 'react-native-orientation';
import Dumb from './dumb';

class Smart extends Component {
  
  constructor(props)
  {
    super(props);
  }

  componentWillMount()
  {
    Orientation.lockToPortrait();
  }

  render() {
    return <Dumb {...this.props}/>;
  }
}

export default Smart;
