import React, {Component} from 'react';
import {Linking, Alert,PermissionsAndroid} from 'react-native';
import SendSMS from 'react-native-sms-x';
import { createCall } from './../../../global/actions/createCall'
import { InputCheckeremail, InputCheckersphoneNumber} from './../../../global/utils'
// import Proptypes if needed

import Dumb from './dumb';

class Smart extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.btnSwitchEmail= this.btnSwitchEmail.bind(this);
    this.btnSwitchSms= this.btnSwitchSms.bind(this);
    
    this.state={
      loading:false, 
      videoCallId:'',
      error:'',
      bySms:true
    }
  }

  componentWillMount(){
    this.requestPermission();
  }

  requestPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.SEND_SMS,
        {
          title: 'Authorisation utilisation SMS',
          message: 'acceptetez vous que instant-visio envoi un sms a votre proche ?'
        } 
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        //sms read permissions granted
      } else {
        //sms read permissions denied
      }
    } catch (err) {
      //Err
    }
  };

  submit = () => {

    const values={
      personName: this.props.Name,
      phone: this.state.bySms?this.props.PhoneNumer:'',
      mail: !this.state.bySms?this.props.Email:'',
    }
    if(!InputCheckeremail(values.mail) && !InputCheckersphoneNumber(values.phone))
    {
      this.setState({error : true})
      return;
    }

    if((/^[\s]*$/.test(this.props.Name.toString())))
    {
      this.setState({error : true})
      return;
    }
    //send mail/sms
    this.setState({loading : true})
      createCall(values)
          .then(roomName => {
              this.setState({videoCallId : roomName});
                    //send sms only android
                    if(InputCheckersphoneNumber(values.phone))
                    {
                      SendSMS.send(123, values.phone, `INSTANT VISIO : ${this.props.Name} vous invite à le joindre à une visio conf merci de trouver le lien de la conf https://instantvisio.daily.co/${this.state.videoCallId}`,
                          (msg)=>{
                            console.log(msg)
                          }
                    );}
                    //end send sms to backgroung

              Alert.alert(
                'Félicitations!',
                'Une invitation a été envoyer à votre proche pour vous rejoindre call',
                [
                  {
                    text: 'OK',
                    onPress: () => Linking.openURL(`https://instantvisio.daily.co/${this.state.videoCallId}`)
                  },
                ],
                { cancelable: false }
              );
              this.setState({error : false})
          })
          .catch(err => {
            Alert.alert(
              'Error!',
              'Une erreur est survenu reesayer plutard',
              [
                {
                  text: 'Réessayer',
                  onPress: () => console.log(err)
                },
              ]
            );
        })
          .finally(() => {
            this.setState({loading : false})
            this.state.bySms?this.props.onChangeePhoneNumber(''):this.props.onChangeEmail('');
        })
  }
  
  btnSwitchEmail = () => this.setState({ bySms: false });
  btnSwitchSms = () => this.setState({ bySms: true });

  render() {
    return <Dumb 
    loading={this.state.loading}
    error={this.state.error}
    submit={this.submit} 
    bySms={this.state.bySms}
    btnSwitchEmail={this.btnSwitchEmail}
    btnSwitchSms={this.btnSwitchSms} 
    {...this.props}
    />;
  }
}

export default Smart;
