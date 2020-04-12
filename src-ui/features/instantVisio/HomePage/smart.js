import React, {Component} from 'react';
import {Alert} from 'react-native';
import Orientation from 'react-native-orientation';
import {createCall} from './../../../global/actions/createCall';
import {
  InputCheckeremail,
  InputCheckersphoneNumber,
} from './../../../global/utils';
// import Proptypes if needed
import {request} from 'react-native-permissions';
import {check, PERMISSIONS, RESULTS} from 'react-native-permissions';

import Dumb from './dumb';

class Smart extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.btnSwitchEmail = this.btnSwitchEmail.bind(this);
    this.btnSwitchSms = this.btnSwitchSms.bind(this);
    this.redirectToDailyVisio = this.redirectToDailyVisio.bind(this);
    this.Ensavoirplus = this.Ensavoirplus.bind(this);
    this.okButon = this.okButon.bind(this);

    this.state = {
      loading: false,
      videoCallId: '',
      error: '',
      bySms: true,
      modalVisible: false,
      modalMessage:'',
      modalTitle: '',
      showEnsavoirplus:false
    };
  }

  componentWillMount()
  {
    Orientation.lockToPortrait();
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
    // Promise.resolve('https://www.google.it')
    createCall(values)
      .then(roomName => {

        //set la valeur du videoCallId dans le store
        this.props.SetVideoCallId(roomName);
        //fin set la valeur du videoCallId dans le store
        
        this.setState({videoCallId: roomName});
        this.setState({modalMessage: 'Une invitation a été envoyée à votre proche pour vous rejoindre en visiophonie'});
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

  checkAndAskPermissions = async () => {
    return Promise.all([
      this.checkPermission(PERMISSIONS.ANDROID.CAMERA),
      this.checkPermission(PERMISSIONS.ANDROID.RECORD_AUDIO)
    ])
  }

  checkPermission = async (permission) => {
    let errMessage = '';
    return check(permission)
      .then(result => {
        switch (result) {
          case RESULTS.UNAVAILABLE:
            errMessage = 'This feature is not available (on this device / in this context)';
            console.log(errMessage);
            throw errMessage;
          case RESULTS.DENIED:
            console.log(
              `The permission ${permission} has not been requested / is denied but requestable`,
            );
            return request(permission);
          case RESULTS.GRANTED:
            console.log('The permission is granted');
            return true;
          case RESULTS.BLOCKED:
            errMessage = 'The permission is denied and not requestable anymore';
            console.log(errMessage);
            throw errMessage;
        }
      })
  }

  async redirectToDailyVisio(){
    console.log('Opening visio')
    try {
      await this.checkAndAskPermissions();
      this.props.navigation.navigate('Visio')
      this.setState({modalVisible: false});
    } catch(err) {
      console.log('Permissions error: ' + err);
    }
  }

  btnSwitchEmail = () => this.setState({bySms: false});
  btnSwitchSms = () => this.setState({bySms: true});

  Ensavoirplus = () => this.setState({showEnsavoirplus: true});
  okButon = () => this.setState({showEnsavoirplus: false});
  

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
        Ensavoirplus={this.Ensavoirplus}
        okButon={this.okButon}
        showEnsavoirplus={this.state.showEnsavoirplus}
        {...this.props}
      />
    );
  }
}

export default Smart;
