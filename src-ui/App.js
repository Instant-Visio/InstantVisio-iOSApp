import React from 'react';
import Navigation from './navigation';
import {Provider} from 'react-redux';
import store from './store/createStore';
import {SocleProvider,Block} from './global/components/Socles';


const Theme = {
  SIZES: {BASE: 18}, // this will overwrite the Socle SIZES BASE value 16
  COLORS: {PRIMARY: 'red'}, // this will overwrite the Socle COLORS PRIMARY color #B23AFC
};

export default class App extends React.Component {
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
