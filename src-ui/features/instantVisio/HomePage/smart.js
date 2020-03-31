import React, {Component} from 'react';
import {Linking, Alert,ToastAndroid,PermissionsAndroid} from 'react-native';
import SendSMS from 'react-native-sms-x';
import { createCall } from './../../../global/actions/createCall'
import { InputCheckeremail, InputCheckersphoneNumber} from './../../../global/utils'
// import Proptypes if needed

import Dumb from './dumb';

class Smart extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.state={
      loading:false, 
      videoCallId:'',
      error:'',
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
          title: 'Authorisation de partge',
          message: 'acceptetez vous que l app envoi un sms a votre proche'
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
      phone: this.props.PhoneNumer,
      mail: this.props.Email,
    }
    if(!InputCheckeremail(this.props.Email) && !InputCheckersphoneNumber(this.props.PhoneNumer))
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
                    if(InputCheckersphoneNumber(this.props.PhoneNumer))
                    {
                      SendSMS.send(123, this.props.PhoneNumer, `INSTANT VISIO : ${this.props.Name} vous invite à le joindre à un video conf merci de lien de la conf https://instantvisio.daily.co/${this.state.videoCallId}`,
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
            this.setState({error : true})
        })
          .finally(() => {
            this.setState({loading : false})
        })
  }

  render() {
    return <Dumb 
    loading={this.state.loading}
    error={this.state.error}
    submit={this.submit} 
    {...this.props} 
    />;
  }
}

export default Smart;
