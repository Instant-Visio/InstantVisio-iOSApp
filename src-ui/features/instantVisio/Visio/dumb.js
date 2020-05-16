import React from 'react';
import WebView from 'react-native-webview';
import {FabSwipeMenu} from './../../../global/components/Socles';

const Dump = ({navigation, videoCallIdProps,sharedLink}) => (
  <>
    {/** tu peux l'utiliser ici egalement**/}
    <WebView
      style={{flex:1}}
      source={{uri: `${'https://instantvisio.com/visio/'}${videoCallIdProps}`}}
      /* Does not store any data within the lifetime of the WebView. */
      // incognito={true}
    />
    <FabSwipeMenu sharedLink={sharedLink}/>
  </>
);

export default Dump;
