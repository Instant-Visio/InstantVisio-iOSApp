import React, { Component } from 'react';
import fr from './../../../../../assets/i18n/fr.json';

import Dumb from './dumb';

class Smart extends Component {
  
  constructor(props)
  {
    super(props);
  }


  render() {
    return <Dumb DonneePersonnelle={fr.translation.DonneePersonnelle} {...this.props}/>;
  }
}

export default Smart;
