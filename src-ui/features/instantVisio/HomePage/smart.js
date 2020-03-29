import React, {Component} from 'react';
import {Linking, Alert} from 'react-native';
import { createCall } from './../../../global/actions/createCall'
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


  submit = () => {

    const values={
      personName: this.props.Name,
      phone: this.props.PhoneNumer,
      mail: this.props.Email,
    }

    this.setState({loading : true})
      createCall(values)
          .then(roomName => {
              this.setState({videoCallId : roomName});

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
              
          })
          .catch(err => {
            this.setState({error : err})
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
