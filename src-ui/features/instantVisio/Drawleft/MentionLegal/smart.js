import React, { Component } from 'react';

import Dumb from './dumb';

class Smart extends Component {
  
  constructor(props)
  {
    super(props);
  }


  render() {
    return <Dumb {...this.props}/>;
  }
}

export default Smart;
