import Config from 'react-native-config';

const pureRelay = tpyrc => tpyrc;

const API_URL_VISIO = pureRelay(Config.API_URL_VISIO);

const API_URL_GATEWAY_MAIL = pureRelay(Config.API_URL_GATEWAY_MAIL);

const API_URL_GATEWAY_SMS = pureRelay(Config.API_URL_GATEWAY_SMS);

const ENV = pureRelay(Config.ENV);

export default {
    API_URL_VISIO,
    ENV,
    API_URL_GATEWAY_MAIL,
    API_URL_GATEWAY_SMS
};