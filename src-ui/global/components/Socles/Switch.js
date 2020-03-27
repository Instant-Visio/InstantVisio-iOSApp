import React from 'react';
import { Switch as Switcher, Platform} from 'react-native';
import PropTypes from 'prop-types';
import SocleTheme, { withSocle } from './theme';

function Switch({
  initialValue,
  onChange,
  color,
  disabled,
  trackColor,
  ios_backgroundColor,
  ...rest
}) {
  const [switchValue, setSwitchValue] = React.useState(initialValue);
  React.useEffect(() => {
    onChange(switchValue);
  }, [switchValue]);
  function onPressSwitch() {
    setSwitchValue(!switchValue);
    return null;
  }

  // trackColor.true = color === 'primary' ? SocleTheme.COLORS.PRIMARY : color;

  const thumbColor = Platform.OS === 'ios' ? null :
  (Platform.OS === 'android' && switchValue ? SocleTheme.COLORS.GREY : SocleTheme.COLORS.PRIMARY);

  return (
    <Switcher
      disabled={disabled}
      trackColor={{ ...trackColor }}
      ios_backgroundColor={ios_backgroundColor}
      value={switchValue}
      onValueChange={() => {
        onPressSwitch();
      }}
      {...rest}
    />
  );
}

Switch.defaultProps = {
  color: SocleTheme.COLORS.PRIMARY,
  ios_backgroundColor: SocleTheme.COLORS.GREY,
  trackColor: {
    false: SocleTheme.COLORS.GREY,
    true: SocleTheme.COLORS.PRIMARY,
  },
  disabled: false,
  initialValue: false,
};

Switch.propTypes = {
  ...Switcher.propTypes,
  color: PropTypes.oneOfType([
    PropTypes.oneOf(['primary', 'theme', 'error', 'warning', 'success', 'info']),
    PropTypes.string,
  ]),
  disabled: PropTypes.bool,
  initialValue: PropTypes.bool,
  onChange: PropTypes.func.isRequired
};

export default withSocle(Switch);
