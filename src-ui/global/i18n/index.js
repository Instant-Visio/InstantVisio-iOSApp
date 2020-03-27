import ReactNative from 'react-native';
import I18n from 'react-native-i18n';
import fr from '../../../assets/i18n/fr.json';
import en from '../../../assets/i18n/en.json';



I18n.fallbacks = true;

I18n.translations = {
  fr,
  en
};
I18n.defaultLocale = 'fr';
I18n.locale = 'fr';

const currentLocale = I18n.currentLocale();

// Is it a RTL language? (such as Hebrew and Arabic)
export const isRTL = currentLocale.indexOf('he') === 0 || currentLocale.indexOf('ar') === 0;

// Allow RTL alignment in RTL languages
ReactNative.I18nManager.allowRTL(isRTL);

export const i18nString = (name, params = {}) => {
  const string = I18n.t(name, params);
  return string;
};

export default I18n;
