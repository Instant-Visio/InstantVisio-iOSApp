import Config from 'react-native-config';

const pureRelay = tpyrc => tpyrc;

const REACT_APP_APPID=pureRelay(Config.REACT_APP_APPID);
const REACT_APP_API_KEY=pureRelay(Config.REACT_APP_API_KEY);
const REACT_APP_AUTH_DOMAIN=pureRelay(Config.REACT_APP_AUTH_DOMAIN);
const REACT_APP_DATABASE_URL=pureRelay(Config.REACT_APP_DATABASE_URL);
const REACT_APP_PROJECT_ID=pureRelay(Config.REACT_APP_PROJECT_ID);
const REACT_APP_MEASUREMENT_ID=pureRelay(Config.REACT_APP_MEASUREMENT_ID);
 
console.log(Config.REACT_APP_APPID)

export default {
    REACT_APP_APPID,
    REACT_APP_API_KEY,
    REACT_APP_AUTH_DOMAIN,
    REACT_APP_DATABASE_URL,
    REACT_APP_PROJECT_ID,
    REACT_APP_MEASUREMENT_ID
};