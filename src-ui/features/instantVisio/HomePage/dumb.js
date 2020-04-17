import React from 'react';
import {ScrollView, Image, TouchableOpacity, View, Modal} from 'react-native';
import {Spinner} from 'native-base';
import data from './../../../global/static/data.json'
import {
  Block,
  Input,
  Text,
  Button,
  theme,
  Modals,
  ModalUtils,
} from './../../../global/components/Socles';
import {
  InputCheckeremail,
  InputCheckersphoneNumber,
} from './../../../global/utils';
import images from './../../../global/components/images';
import vars from './../../../global/vars';
import {i18nString} from './../../../global/i18n';
import SelectionContry from './selectCountries';

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
  modalVisible,
  redirectToDailyVisio,
  modalTitle,
  modalMessage,
  showEnsavoirplus,
  okButon,
  Ensavoirplus,
  SetModalVisibleCountries,
  CountrySelected
}) => (
  <Block style={{flex: 1}}>
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
    <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
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
          {i18nString('textHome')}
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
          {i18nString('btnSMS')}
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
          {i18nString('btnEMAIL')}
        </Button>
      </Block>
      <Block center style={{flex: 1, marginHorizontal: vars.widthUnit * 7}}>
        <Input
          color="#666666"
          style={{
            borderColor:
              error && /^[\s]*$/.test(Name.toString()) ? 'red' : '#666666',
          }}
          placeholderTextColor="#9FA5AA"
          placeholder={i18nString('placeholderYourName')}
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
            placeholder={i18nString('placeholderPhone')}
            help={i18nString('phoneInputHelp')}
            bottomHelp
            value={PhoneNumer}
            underlineColorAndroid="transparent"
            keyboardType={'phone-pad'}
            autoCapitalize="none"
            onChangeText={onChangeePhoneNumber}

            left2
            flag={CountrySelected.flag}
            onPressFlag={SetModalVisibleCountries}

            left3
            icon3="md-arrow-dropdown"
            family3="ionicon"
            iconSize3={14}
            iconColor3="#666666"
            onPressIcon3={SetModalVisibleCountries}
          />
        ) : (
          <Input
            color="#666666"
            style={{
              borderColor:
                error && !InputCheckeremail(Email) ? 'red' : '#666666',
            }}
            placeholderTextColor="#9FA5AA"
            placeholder={i18nString('placeholderEmail')}
            help={i18nString('emailInputHelp')}
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
          {i18nString('btnJoindreVotreProche')}
        </Button>
      </Block>
      <Block center flex={0.5} style={{marginVertical: vars.heightUnit}}>
        <TouchableOpacity onPress={Ensavoirplus}>
          <Text style={[{color: '#666666', fontSize: 16}]}>{i18nString('linkEnsavoirPlus')}</Text>
        </TouchableOpacity>
      </Block>
    </ScrollView>

    <Modal transparent visible={loading}>
      <View style={[style.center, style.ApiModalLoader]}>
        <Spinner color={theme.COLORS.WARNING} size="large" />
      </View>
    </Modal>
    <ModalUtils
      displayAlert={showEnsavoirplus}
      alertTitleText={i18nString('linkEnsavoirPlus')}
      alertMessageText={i18nString('textEnsavoirPlus')}
      displayPositiveButton={true}
      positiveButtonText={i18nString('labelDonneesPersonnelle')}
      onPressPositiveButton={() => {
        okButon();
        navigation.navigate('DonneesPersonnelles');
      }}
      displayNegativeButton={true}
      negativeButtonText={'OK'}
      onPressNegativeButton={() => okButon()}
    />

    <Modals
      displayAlert={modalVisible}
      displayAlertIcon={false}
      alertTitleText={modalTitle}
      alertMessageText={modalMessage}
      displayPositiveButton={true}
      positiveButtonText={'OK'}
      onPressPositiveButton={redirectToDailyVisio}
    />

    <SelectionContry/>
  </Block>
);

export default Dump;
