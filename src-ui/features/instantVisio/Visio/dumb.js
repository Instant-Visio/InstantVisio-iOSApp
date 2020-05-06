import React from 'react';
import WebView from 'react-native-webview';
import Config from 'react-native-config';

const Dump = ({navigation, videoCallIdProps}) => (
  <>
    {/** tu peux l'utiliser ici egalement**/}
    <WebView
      style={{flex:1}}
      source={{uri: `${Config.URL_CALL}${videoCallIdProps}`}}
      /* Does not store any data within the lifetime of the WebView. */
      // incognito={true}
    />
  </>
);

export default Dump;
