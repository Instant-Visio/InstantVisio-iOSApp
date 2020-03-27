import React from 'react';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import PropTypes from 'prop-types';

import SocleTheme, { withSocle } from './theme';
import getIconType from './helpers/getIconType';

function Icon({
  name,
  family,
  size,
  color,
  styles,
  theme,
  ...rest
}) {
    const IconInstance = getIconType(family);
    if (name && IconInstance) {
      return (
        <IconInstance
          name={name}
          size={size || theme.SIZES.BASE}
          color={color || theme.COLORS.BLACK}
          {...rest}
        />
      );
    }

  return null;
}

Icon.defaultProps = {
  name: null,
  family: null,
  size: null,
  color: null,
  styles: {},
  theme: SocleTheme,
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  family: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
  styles: PropTypes.any,
  theme: PropTypes.any,
};

export default withSocle(Icon);
