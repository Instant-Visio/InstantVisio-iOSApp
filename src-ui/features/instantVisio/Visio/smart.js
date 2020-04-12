import React, {Component} from 'react';
import Orientation from 'react-native-orientation';
import { BackHandler } from 'react-native';
import Dumb from './dumb';

class Smart extends Component {
  constructor(props) {
    super(props);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }

  componentWillMount() {
    Orientation.lockToLandscape();
    BackHandler.addEventListener(
      'hardwareBackPress',
      this.handleBackButtonClick,
    );
  }

  componentWillUnmount() {
    BackHandler.removeEventListener(
      'hardwareBackPress',
      this.handleBackButtonClick,
    );
  }

  handleBackButtonClick() {
    Orientation.lockToPortrait();
    this.props.navigation.goBack(null);
    return true;
  }

  render() {
    return <Dumb {...this.props} />;
  }
}

export default Smart;
