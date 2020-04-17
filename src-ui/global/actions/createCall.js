import {functions} from '../firebase/firebase';
import {Alert} from 'react-native';
import I18n from 'react-native-i18n';



export const createCall = async values => {
  try {
    const currentLocale = I18n.currentLocale().split('-');
    const result = await functions.newCall({
      name: values.personName,
      phone: values.phone,
      email: values.mail,
      lang: currentLocale[0],
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
