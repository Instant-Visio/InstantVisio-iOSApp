import React from 'react';
import {Alert} from 'react-native'
import Navigation from './navigation';
import {Provider} from 'react-redux';
import store from './store/createStore';
import {SocleProvider,Block} from './global/components/Socles';
import data from './global/static/data.json';
import i18n from 'i18next';
import * as RNLocalize from "react-native-localize";
import {onChangeAction} from '../src-ui/features/instantVisio/actions';

const Theme = {
  SIZES: {BASE: 18}, // this will overwrite the Socle SIZES BASE value 16
  COLORS: {PRIMARY: 'red'}, // this will overwrite the Socle COLORS PRIMARY color #B23AFC
};

export default class App extends React.Component {

  componentWillMount(){
    RNLocalize.addEventListener("change", this._onLanguageChange)
  }

  componentWillUnmount(){
    RNLocalize.removeEventListener("change", this._onLanguageChange)
  }

  _onLanguageChange= () =>{
    
    let locales = RNLocalize.getLocales();
    let country = data.find(item=>item.code==locales[0].countryCode);
    store.dispatch(onChangeAction(['form', 'countrySelected','name'])(country.name));
    store.dispatch(onChangeAction(['form', 'countrySelected','flag'])(country.flag));
    store.dispatch(onChangeAction(['form', 'countrySelected','code'])(country.code));
    store.dispatch(onChangeAction(['form', 'countrySelected','dial_code'])(country.dial_code));
  
    if (Array.isArray(locales)) {
      i18n.changeLanguage(locales[0].languageCode);
    }
  }

  render() {
    return (
      <>
        {/* Store gestion */}
        <Provider store={store}>
          <SocleProvider theme={Theme}>
            {/* App */}
            <Block flex>
            <Navigation />
            </Block>
          </SocleProvider>
        </Provider>
      </>
    );
  }
}
