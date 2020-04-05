import Config from './../config';
import {Platform} from 'react-native';
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/functions';
import '@react-native-firebase/auth';
import '@react-native-firebase/remote-config';
import '@react-native-firebase/analytics';

//pluck values from your 'google-services.json' you created on the firebase console
const androidConfig = {
  clientId: Config.REACT_NATIVE_APP_CLIENTID,
  appId: Config.REACT_NATIVE_APP_APPID,
  apiKey: Config.REACT_NATIVE_APP_API_KEY,
  authDomain: Config.REACT_NATIVE_APP_AUTH_DOMAIN,
  databaseURL: Config.REACT_NATIVE_APP_DATABASE_URL,
  projectId: Config.REACT_NATIVE_APP_PROJECT_ID,
  messagingSenderId: Config.REACT_NATIVE_APP_MESSAGINGSENDERID,
  storageBucket: Config.REACT_NATIVE_APP_STORAGEBUCKET,
  measurementId: Config.REACT_NATIVE_APP_MEASUREMENT_ID,
  persistence: Config.REACT_NATIVE_APP_PERSISTENCE
};

// pluck values from your `GoogleService-Info.plist` you created on the firebase console
const iosConfig = {
  clientId: Config.REACT_NATIVE_APP_CLIENTID,
  appId: Config.REACT_NATIVE_APP_APPID,
  apiKey: Config.REACT_NATIVE_APP_API_KEY,
  authDomain: Config.REACT_NATIVE_APP_AUTH_DOMAIN,
  databaseURL: Config.REACT_NATIVE_APP_DATABASE_URL,
  projectId: Config.REACT_NATIVE_APP_PROJECT_ID,
  messagingSenderId: Config.REACT_NATIVE_APP_MESSAGINGSENDERID,
  storageBucket: Config.REACT_NATIVE_APP_STORAGEBUCKET,
  measurementId: Config.REACT_NATIVE_APP_MEASUREMENT_ID,
  persistence: Config.REACT_NATIVE_APP_PERSISTENCE
};

//inside function check before initializing
firebase.apps.length !== 0
  ? firebase.app()
  : firebase.initializeApp(
      // use platform specific firebase config
      Platform.OS === 'ios' ? iosConfig : androidConfig,
);

export const remoteConfig = firebase.remoteConfig();
remoteConfig.settings = {
  minimumFetchIntervalMillis: 3600000,
};

if (Config.ENV === 'dev') {
  firebase.functions().useFunctionsEmulator('http://localhost:5000');
}

export const functions = {
  newCall: firebase.functions().httpsCallable('newCall'),
};

firebase.analytics();
