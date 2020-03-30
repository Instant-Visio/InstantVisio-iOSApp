import Config from './../config';
import {Alert,Platform} from 'react-native';
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/functions';
import '@react-native-firebase/auth';
import '@react-native-firebase/remote-config';
import '@react-native-firebase/analytics';


//pluck values from your 'google-services.json' you created on the firebase console
const androidConfig = {
    clientId: '1069540149829-dmnal5i765t4gqgn0vgc0dd4777p8501.apps.googleusercontent.com',
    appId:'1:1069540149829:android:203b385ac1bd8eb245f12c',
    apiKey: 'AIzaSyDEJ9XcxNxwujAB5c_hyoK1Gln-XTBdLq4',
    authDomain: Config.REACT_APP_AUTH_DOMAIN,
    databaseURL: 'https://flash-antler-244109.firebaseio.com/',
    projectId: 'flash-antler-244109',
    messagingSenderId:'1069540149829',
    storageBucket:'gs://flash-antler-244109.appspot.com',
    measurementId: Config.REACT_APP_MEASUREMENT_ID,
    persistence: true,
    }


// pluck values from your `GoogleService-Info.plist` you created on the firebase console
const iosConfig = {
    clientId: '1069540149829-dmnal5i765t4gqgn0vgc0dd4777p8501.apps.googleusercontent.com',
    appId:'1:1069540149829:android:203b385ac1bd8eb245f12c',
    apiKey: 'AIzaSyDEJ9XcxNxwujAB5c_hyoK1Gln-XTBdLq4',
    authDomain: Config.REACT_APP_AUTH_DOMAIN,
    databaseURL: 'https://flash-antler-244109.firebaseio.com/',
    projectId: 'flash-antler-244109',
    messagingSenderId:'1069540149829',
    storageBucket:'gs://flash-antler-244109.appspot.com',
    measurementId: Config.REACT_APP_MEASUREMENT_ID,
    persistence: true,
    }

    Alert.alert(Config.REACT_NATIVE_APP_APPID);

//inside function check before initializing
firebase.apps.length!==0 ? firebase.app() : firebase.initializeApp(
// use platform specific firebase config
Platform.OS === 'ios' ? iosConfig : androidConfig
);


// firebase.initializeApp(firebaseConfig)

export const remoteConfig = firebase.remoteConfig()
remoteConfig.settings = {
    minimumFetchIntervalMillis: 3600000,
}

if(Config.ENV === 'dev') {
    firebase.functions().useFunctionsEmulator('http://localhost:5000')
}

export const functions = {
    newCall: firebase.functions().httpsCallable('newCall'),
}

firebase.analytics()
