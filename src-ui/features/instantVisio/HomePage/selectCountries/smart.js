import React, {Component} from 'react';
import {Alert} from 'react-native';
import data from './../../../../global/static/data.json';

import Dumb from './dumb';

class Smart extends Component {
  constructor(props) {
    super(props);
    this.selectCountry = this.selectCountry.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  selectCountry(country) {
    //Alert.alert(country)
    this.props.selectCountryName(country.name);
    this.props.selectCountryFlag(country.flag);
    this.props.selectCountryCode(country.code);
    this.props.selectCountryDialCode(country.dial_code);

    this.props.setModalInVisible(false);
  }

  hideModal() {
    this.props.setModalInVisible(false);
  }

  render() {
    return (
      <Dumb
        countryData={data}
        selectCountry={this.selectCountry}
        hideModal={this.hideModal}
        {...this.props}
      />
    );
  }
}

export default Smart;
