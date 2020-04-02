import React from 'react';
import {ScrollView, Image, TouchableOpacity, View, Modal} from 'react-native';
import {Spinner} from 'native-base';
import {Block, Input, Text, Button, theme} from './../../../global/components/Socles';
import {
  InputCheckeremail,
  InputCheckersphoneNumber,
} from './../../../global/utils';
import images from './../../../global/components/images';
import vars from './../../../global/vars';

import style from './style';

const Dump = ({
  navigation,
  submit,
  error,
  loading,
  Name,
  PhoneNumer,
  Email,
  onChangeEmail,
  onChangeePhoneNumber,
  onChangeeName,
  bySms,
  btnSwitchSms,
  btnSwitchEmail,
}) => (
  <Block style={{flex: 1}}>
    <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
      <Block flex={0.1} style={{marginHorizontal: 15, marginTop: 15}}>
        <Button
          onlyIcon
          icon="menu"
          iconFamily="entypo"
          iconSize={30}
          color="transparent"
          iconColor="#666666"
          onPress={() => navigation.openDrawer()}
          style={{width: 40, height: 40}}>
          no text
        </Button>
      </Block>
      <Block center flex={2} style={{marginBottom: vars.heightUnit * 3.5}}>
        <Image
          style={{width: 170, height: 160}}
          source={images.logo.visioLogo}
        />
      </Block>
      <Block
        center
        style={{
          justifyContent: 'flex-start',
          marginBottom: vars.heightUnit * 2.5,
          marginHorizontal: vars.widthUnit * 7,
        }}
        flex={0.5}>
        <Text center style={{color: '#9FA5AA', fontSize: 15}}>
          À la soumission du formulaire, vous serez redirigé-e vers la page
          d'appel en visiophone. En parallèle, un sms et / ou un e-mail sera
          envoyé à votre proche et l'invitera à vous rejoindre directement sur
          la page pour échanger avec vous.
        </Text>
      </Block>
      <Block
        center
        row
        style={{
          justifyContent: 'flex-start',
          marginBottom: vars.heightUnit * 2.5,
          marginHorizontal: vars.widthUnit * 7,
        }}
        flex={0.1}>
        <Button
          opacity={0.5}
          color={bySms ? '#666666' : '#bfbaba'}
          onPress={btnSwitchSms}
          style={{
            width: 150,
            borderColor: bySms ? '#66cccc' : null,
            borderWidth: bySms ? 1.5 : 0,
          }}>
          SMS
        </Button>
        <Button
          opacity={0.5}
          color={bySms ? '#bfbaba' : '#666666'}
          onPress={btnSwitchEmail}
          style={{
            width: 150,
            borderColor: bySms ? null : '#66cccc',
            borderWidth: bySms ? 0 : 1.5,
          }}>
          EMAIL
        </Button>
      </Block>
      <Block style={{flex: 1, marginHorizontal: vars.widthUnit * 7}}>
        <Input
          color="#666666"
          style={{
            borderColor:
              error && /^[\s]*$/.test(Name.toString()) ? 'red' : '#666666',
          }}
          placeholderTextColor="#9FA5AA"
          placeholder="Votre nom"
          value={Name}
          autoCapitalize="none"
          underlineColorAndroid="transparent"
          onChangeText={onChangeeName}
        />

        {bySms ? (
          <Input
            color="#666666"
            style={{
              borderColor:
                error && !InputCheckersphoneNumber(PhoneNumer)
                  ? 'red'
                  : '#666666',
            }}
            placeholderTextColor="#9FA5AA"
            placeholder="Numéro de téléphone de votre proche"
            help="Numéro de téléphone ex: +212XXXXXXXXXX"
            bottomHelp
            value={PhoneNumer}
            underlineColorAndroid="transparent"
            keyboardType={'phone-pad'}
            autoCapitalize="none"
            onChangeText={onChangeePhoneNumber}
          />
        ) : (
          <Input
            color="#666666"
            style={{
              borderColor:
                error && !InputCheckeremail(Email) ? 'red' : '#666666',
            }}
            placeholderTextColor="#9FA5AA"
            placeholder="E-mail de votre proche"
            help="E-mail de votre proche obligatoire"
            bottomHelp
            autoCapitalize="none"
            value={Email}
            underlineColorAndroid="transparent"
            keyboardType={'email-address'}
            onChangeText={onChangeEmail}
          />
        )}

        <Button
          opacity={0.5}
          color="#666666"
          onPress={submit}
          style={{width: 307, marginVertical: vars.heightUnit * 1.5}}>
          Joindre mon proche
        </Button>
      </Block>
      <Block center flex={0.5} style={{marginVertical: vars.heightUnit}}>
        <TouchableOpacity>
          <Text style={[{color: '#666666', fontSize: 16}]}>En savoir plus</Text>
        </TouchableOpacity>
      </Block>
    </ScrollView>
    <Modal transparent visible={loading}>
      <View style={[style.center, style.ApiModalLoader]}>
        <Spinner color={theme.COLORS.WARNING} size="large" />
      </View>
    </Modal>
  </Block>
);

export default Dump;
