import React from 'react';
import PropTypes from 'prop-types';

// import COLORS & SIZES
import SOCLE_COLORS from './colors';
import SOCLE_SIZES from './sizes';

// default theme with COLORS & SIZES
const SocleTheme = {
  COLORS: SOCLE_COLORS,
  SIZES: SOCLE_SIZES,
};

export default SocleTheme;

// creating the SocleTheme context
const SocleContext = React.createContext();

/*
*   withSocle
*   args: Component - React Component, styles to be added to Component
*   theme: if no styles or theme add default theme={ SIZES, COLORS }
*/

export function withSocle(Component, styles) {
  // eslint-disable-next-line react/no-multi-comp
  return class extends React.Component {
    render() {
      const { props } = this;
      return (
        <SocleContext.Consumer>
          {theme => (
            <Component
              {...props}
              theme={{ ...SocleTheme, ...theme }}
              styles={styles && styles({ ...SocleTheme, ...theme })}
            />
          )}
        </SocleContext.Consumer>
      );
    }
  };
}

/*
*   SocleProvider using React.Component
*   SocleContext.Provider value has the default value from { COLORS, SIZES }
*/

// eslint-disable-next-line react/no-multi-comp
export class SocleProvider extends React.Component {
  static defaultProps = {
    children: null,
    theme: {},
  }

  render() {
    const { theme, children } = this.props;
    const { COLORS: CUSTOM_COLORS, SIZES: CUSTOM_SIZES, customTheme } = theme;

    const providerTheme = {
      COLORS: { ...SocleTheme.COLORS, ...CUSTOM_COLORS },
      SIZES: { ...SocleTheme.SIZES, ...CUSTOM_SIZES },
      ...customTheme
    };

    return (
      <SocleContext.Provider value={providerTheme}>
        {children}
      </SocleContext.Provider>
    );
  }
}

SocleProvider.propTypes = {
  children: PropTypes.any,
  theme: PropTypes.any,
};
