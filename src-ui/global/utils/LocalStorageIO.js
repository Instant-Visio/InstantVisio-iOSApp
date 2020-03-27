import { AsyncStorage } from 'react-native';

export const setData = async (key, value) => {
  try {
    if (value !== null && value !== undefined) {
      await AsyncStorage.setItem(key, value);
    } else {
      await AsyncStorage.removeItem(key);
    }
    return true;
  } catch (error) {
    // Error saving data
    console.log(error);
    return false;
  }
};

export const getData = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (error) {
    return null;
  }
};