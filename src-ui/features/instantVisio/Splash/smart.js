import React, { Component } from 'react';

import Dumb from './dumb';

class Smart extends Component {
  
  constructor(props)
  {
    super(props);
    setTimeout(()=>{
      this.props.navigation.navigate('InstantVisio');
    },2000)
  }


  render() {
    return <Dumb {...this.props}/>;
  }
}

export default Smart;
