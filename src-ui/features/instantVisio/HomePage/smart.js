import React, {Component} from 'react';
import {Linking, Alert, PermissionsAndroid} from 'react-native';
import {createCall} from './../../../global/actions/createCall';
import {
  InputCheckeremail,
  InputCheckersphoneNumber,
} from './../../../global/utils';
// import Proptypes if needed

import Dumb from './dumb';

class Smart extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.btnSwitchEmail = this.btnSwitchEmail.bind(this);
    this.btnSwitchSms = this.btnSwitchSms.bind(this);
    this.redirectToDailyVisio = this.redirectToDailyVisio.bind(this);

    this.state = {
      loading: false,
      videoCallId: '',
      error: '',
      bySms: true,
      modalVisible: false,
      modalMessage:'',
      modalTitle: ''
    };
  }

  submit = () => {
    const values = {
      personName: this.props.Name,
      phone: this.state.bySms ? this.props.PhoneNumer  : '',
      mail: !this.state.bySms ? this.props.Email : ''
    };
    if (
      !InputCheckeremail(values.mail) &&
      !InputCheckersphoneNumber(values.phone)
    ) {
      this.setState({error: true});
      return;
    }

    if (/^[\s]*$/.test(this.props.Name.toString())) {
      this.setState({error: true});
      return;
    }
    //send mail/sms
    this.setState({loading: true});
    createCall(values)
      .then(roomName => {
        this.setState({videoCallId: roomName});
        this.setState({modalMessage: 'Une invitation a été envoyer à votre proche pour vous rejoindre call'});
        this.setState({modalTitle: 'Félicitations'});
        this.setState({modalVisible: true});
        this.setState({error: false});
      })
      .catch(err => {
        Alert.alert('Error!', 'Une erreur est survenu reesayer plutard', [
          {
            text: 'Réessayer',
            onPress: () => console.log(err)
          }
        ]);
      })
      .finally(() => {
        this.setState({loading: false});
      });
  };

  redirectToDailyVisio(){
    Linking.openURL(`https://instantvisio.daily.co/${this.state.videoCallId}`)
    this.setState({modalVisible: false});
  }

  btnSwitchEmail = () => this.setState({bySms: false});
  btnSwitchSms = () => this.setState({bySms: true});

  render() {
    return (
      <Dumb
        loading={this.state.loading}
        error={this.state.error}
        submit={this.submit}
        bySms={this.state.bySms}
        btnSwitchEmail={this.btnSwitchEmail}
        btnSwitchSms={this.btnSwitchSms}
        redirectToDailyVisio={this.redirectToDailyVisio}
        modalMessage={this.state.modalMessage}
        modalTitle={this.state.modalTitle}
        modalVisible={this.state.modalVisible}
        {...this.props}
      />
    );
  }
}

export default Smart;
