import i18n from 'i18next';
import * as RNLocalize from "react-native-localize";

import fr from '../../../assets/i18n/fr.json';
import en from '../../../assets/i18n/en.json';
import ar from '../../../assets/i18n/ar.json';
import it from '../../../assets/i18n/it.json';
import es from '../../../assets/i18n/es.json';
import de from '../../../assets/i18n/de.json';
import hu from '../../../assets/i18n/hu.json';
import ro from '../../../assets/i18n/ro.json';
import gr from '../../../assets/i18n/gr.json';
import el from '../../../assets/i18n/el.json';

const src = {
  fr,
  en,
  ar,
  it,
  es,
  de,
  hu,
  ro,
  gr,
  el
};

const currentLocale = RNLocalize.getLocales();

export const isRTL = currentLocale[0].isRTL;

export default i18n.init({
  debug:true,
  lng: currentLocale[0].languageCode,
  fallbackLng:'fr',
  resources: src,
  isRTL: isRTL
})

export const i18nString = (name, params = {}) => {
  const string = i18n.t(name, params);
  return string;
};

