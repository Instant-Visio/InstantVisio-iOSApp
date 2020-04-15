import React, { Component } from 'react';

import Dumb from './dumb';

class Smart extends Component {
  
  constructor(props)
  {
    super(props);
    //tu peux l'utiliser au niveau du smart
    console.log(`starting video: ${this.props.videoCallIdProps}`)
    this.props.videoCallIdProps
  }


  render() {
    return <Dumb {...this.props}/>;
  }
}

export default Smart;
