import React from 'react';
import WebView from 'react-native-webview';
import Config from 'react-native-config';
import DeviceInfo from 'react-native-device-info';

const Dump = ({navigation, videoCallIdProps}) => (
  <>
    {/** tu peux l'utiliser ici egalement**/}
    <WebView
      style={{flex:1}}
      source={{uri: `${DeviceInfo.getBrand().toUpperCase()==='SUMSUNG'?'https://instantvisio.daily.co/':Config.URL_CALL}${videoCallIdProps}`}}
      /* Does not store any data within the lifetime of the WebView. */
      // incognito={true}
    />
  </>
);

export default Dump;
