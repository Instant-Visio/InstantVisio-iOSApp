import React from 'react';
import {
  Modal,
  View,
  Text,
  FlatList,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import style from './style';
import {i18nString} from './../../../../global/i18n';

const Dump = ({
  navigation,
  countryData,
  selectCountry,
  hideModal,
  modalVisible,
}) => (
  <>
    <Modal animationType="slide" transparent={false} visible={modalVisible}>
      <View style={{flex: 1, backgroundColor: '#a1a1a1'}}>
        <View style={{flex: 1}}>
          <FlatList
            data={countryData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <TouchableWithoutFeedback onPress={() => selectCountry(item)}>
                <View style={style.countryStyle}>
                  <Text style={style.textStyle}>
                    {item.flag} {item.name} ({item.dial_code})
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            )}
          />
        </View>
        <View style={{flex: 0.1}}>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => hideModal()}
            style={style.closeButtonStyle}>
            <Text style={style.textStyle}>{i18nString('BtnCancel')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  </>
);

export default Dump;
