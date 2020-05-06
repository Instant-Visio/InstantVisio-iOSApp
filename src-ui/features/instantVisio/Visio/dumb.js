import React from 'react';
import WebView from 'react-native-webview';
import DeviceInfo from 'react-native-device-info';

const Dump = ({navigation, videoCallIdProps}) => (
  <>
    {/** tu peux l'utiliser ici egalement**/}
    <WebView
      style={{flex:1}}
      source={{uri: `${DeviceInfo.getBrand().toUpperCase()==='SAMSUNG'?'https://instantvisio.daily.co/':'https://instantvisio.com/visio/'}${videoCallIdProps}`}}
      /* Does not store any data within the lifetime of the WebView. */
      // incognito={true}
    />
  </>
);

export default Dump;
