import React from 'react';
import WebView from 'react-native-webview';

const Dump = ({navigation, videoCallIdProps}) => (
  <>
    {/** tu peux l'utiliser ici egalement**/}
    <WebView
      style={{flex:1}}
      source={{uri: `https://instantvisio.daily.co/${videoCallIdProps}`}}
    />
  </>
);

export default Dump;
