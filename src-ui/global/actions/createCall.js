import {functions} from '../firebase/firebase';
import * as RNLocalize from "react-native-localize";

export const createCall = async values => {
  try {
    const currentLocale = RNLocalize.getLocales();
    const result = await functions.newCall({
      name: values.personName,
      phone: values.phone,
      email: values.mail,
      lang: currentLocale[0].languageCode==='el'?'gr':currentLocale[0].languageCode,
      platform: 'web',
    });

    if (!result || !result.data || !result.data.name) {
      throw new Error('Room name was not received');
    }

    return Promise.resolve(result.data.name);
  } catch (e) {
    console.error(e);
    return Promise.reject(e);
  }
};
