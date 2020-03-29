import Config from './../config';

import firebase from '@react-native-firebase/app';
import '@react-native-firebase/functions';
import '@react-native-firebase/auth';
import '@react-native-firebase/remote-config';
import '@react-native-firebase/analytics';

const firebaseConfig = {
    appId: Config.REACT_APP_APPID,
    apiKey: Config.REACT_APP_API_KEY,
    authDomain: Config.REACT_APP_AUTH_DOMAIN,
    databaseURL: Config.REACT_APP_DATABASE_URL,
    projectId: Config.REACT_APP_PROJECT_ID,
    measurementId: Config.REACT_APP_MEASUREMENT_ID
}

firebase.initializeApp(firebaseConfig)

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
