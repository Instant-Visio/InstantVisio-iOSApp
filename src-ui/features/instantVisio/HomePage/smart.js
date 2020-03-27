import React, { Component } from 'react';

// import Proptypes if needed
import PropTypes from 'prop-types';
import Dumb from './dumb';

class Smart extends Component {
  
  constructor(props)
  {
    super(props);
    this.state={
      switch: false,
      isShow:false    
    }
    this.toggleSwitch=this.toggleSwitch.bind(this);
    this.setShow=this.setShow.bind(this);
  }

  toggleSwitch = () => this.setState({ switch: !this.state.switch });

  setShow = () => this.setState({ isShow: !this.state.isShow });

  render() {
    return <Dumb 
    toggleSwitch={this.toggleSwitch}
    switchValue={this.state.switch}
    isShow={this.state.isShow}
    setShow={this.setShow}
    {...this.props}
    />;
  }
}

export default Smart;
