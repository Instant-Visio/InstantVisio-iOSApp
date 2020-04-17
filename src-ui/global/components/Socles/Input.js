import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Icon from './Icon';
import SocleTheme, { withSocle } from './theme';

function Input({
  style,
  type,
  placeholderTextColor,
  label,
  color,
  help,
  bgColor,
  borderless,
  viewPass,
  rounded,
  icon,
  family,
  left,
  right,
  iconColor,

  flag,
  left2,
  right2,

  icon3,
  family3,
  left3,
  right3,
  iconColor3,
  onPressIcon3,

  topHelp,
  bottomHelp,
  theme,
  styles,
  iconSize,
  iconContent,
  password,
  onPressIcon,
  onPressFlag,
  ...rest
}) {
  const [isPassword, setIsPassword] = React.useState(false);
  React.useEffect(() => {
    setIsPassword(password);
  }, []);

  const inputViewStyles = [
    styles.inputStyle,
    styles.inputContainer,
    bgColor && { backgroundColor: bgColor },
    rounded && styles.rounded,
    borderless && styles.borderless,
    style,
  ];


  const inputStyles = [
    styles.inputView,
    borderless && icon && styles.inputIcon,
    styles.inputText,
    color && { color },
  ];

  const iconInstance = icon ? (
    <Icon
      name={icon}
      family={family}
      size={iconSize || theme.SIZES.BASE * 1.0625}
      style={{ marginRight: left && !right ? theme.SIZES.BASE * 0.2 : 0 }}
      color={iconColor || placeholderTextColor || theme.COLORS.PLACEHOLDER}
      onPress={onPressIcon && onPressIcon}
    />
  ) : (
      iconContent
    );


    const flagInstance = flag ? (
      <TouchableOpacity
      onPress={() =>onPressFlag()}>
      <Text style={{ marginRight: left2 && !right2 ? theme.SIZES.BASE * 0.2 : 0 }}>{flag}</Text>
    </TouchableOpacity>
    ) : (
        iconContent
  );

  const iconInstance3 = icon3 ? (
    <Icon
      name={icon3}
      family={family3}
      size={iconSize || theme.SIZES.BASE * 1.0625}
      style={{ marginRight: left3 && !right3 ? theme.SIZES.BASE * 0.2 : 0 }}
      color={iconColor3 || placeholderTextColor || theme.COLORS.PLACEHOLDER}
      onPress={onPressIcon3 && onPressIcon3}
    />
  ) : (
      iconContent
);
      
      
  const viewPassElement = password && viewPass && (
    <TouchableOpacity style={{ marginLeft: 2 }} onPress={() => setIsPassword(!isPassword)}>
      <Icon
        size={iconSize || theme.SIZES.BASE * 1.0625}
        color={iconColor || theme.COLORS.BLACK}
        name="eye"
        family="entypo"
      />
    </TouchableOpacity>
  );
  const lebelContent = label && <Text style={styles.label}>{label}</Text>;
  const helpContent = help && <Text style={styles.helpText}>{help}</Text>;

  return (
    <View
      style={{
        marginVertical: theme.SIZES.BASE / 2,
        alignContent: 'center',
      }}>
      {lebelContent}
      {topHelp && !bottomHelp && helpContent}
      <View style={inputViewStyles}>
        {left && !right && iconInstance}
        {left2 && !right2 && flagInstance}
        {left3 && !right3 && iconInstance3}
        <TextInput
          style={inputStyles}
          keyboardType={type}
          secureTextEntry={isPassword}
          placeholderTextColor={placeholderTextColor}
          underlineColorAndroid="transparent"
          {...rest}
        />
        {right && iconInstance}
        {right2 && flagInstance}
        {right3 && iconInstance3}
        {viewPassElement}
      </View>
      {bottomHelp && helpContent}
    </View>
  );
}

Input.defaultProps = {
  type: 'default',
  password: false,
  placeholderTextColor: null,
  label: null,
  help: null,
  rounded: false,
  left: true,
  right: false,
  viewPass: false,
  topHelp: true,
  bottomHelp: false,
  style: null,
  borderless: false,
  bgColor: null,
  iconColor: null,
  icon: null,
  family: null,


  fla:null,
  left2:false,
  right2:false,
  onPressFlag:null,

  left3: true,
  right3: false,
  iconColor3: null,
  icon3: null,
  family3: null,
  onPressIcon3:null,

  color: null,
  styles: {},
  iconSize: null,
  iconContent: null,
  theme: SocleTheme,
  onRef: null,
  onPressIcon:null
};

Input.propTypes = {
  style: PropTypes.any,
  type: PropTypes.string,
  password: PropTypes.bool,
  placeholderTextColor: PropTypes.string,
  label: PropTypes.string,
  bgColor: PropTypes.string,
  rounded: PropTypes.bool,
  borderless: PropTypes.bool,
  viewPass: PropTypes.bool,
  iconColor: PropTypes.string,
  icon: PropTypes.string,
  family: PropTypes.string,
  color: PropTypes.string,
  help: PropTypes.string,
  left: PropTypes.bool,
  right: PropTypes.bool,
  topHelp: PropTypes.bool,
  bottomHelp: PropTypes.bool,
  styles: PropTypes.any,
  iconSize: PropTypes.number,
  iconContent: PropTypes.any,
  theme: PropTypes.any,
  onRef: PropTypes.func,
  onPressIcon: PropTypes.func,



  flag:PropTypes.string,
  left2: PropTypes.bool,
  right2: PropTypes.bool,
  onPressFlag:PropTypes.func,

  left3: PropTypes.bool,
  right3: PropTypes.bool,
  iconColor3: PropTypes.string,
  icon3: PropTypes.string,
  family3: PropTypes.string,
  onPressIcon3:PropTypes.func,
};

const styles = theme =>
  StyleSheet.create({
    inputStyle: {
      backgroundColor: theme.COLORS.WHITE,
      borderRadius: theme.SIZES.INPUT_BORDER_RADIUS,
      borderWidth: theme.SIZES.INPUT_BORDER_WIDTH,
      borderColor: theme.COLORS.INPUT,
      height: theme.SIZES.INPUT_HEIGHT,
      paddingHorizontal: theme.SIZES.INPUT_HORIZONTAL,
      width: '100%',
    },
    inputText: {
      color: theme.COLORS.INPUT,
      fontSize: theme.SIZES.INPUT_TEXT,
      textDecorationColor: 'transparent',
      textShadowColor: 'transparent',
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputView: {
      flex: 1,
    },
    inputIcon: {
      marginHorizontal: theme.SIZES.BASE,
    },
    label: {
      fontWeight: '500',
      fontSize: theme.SIZES.INPUT_LABEL_TEXT,
      marginBottom: theme.SIZES.INPUT_LABEL_BOTTOM,
    },
    helpText: {
      fontSize: theme.SIZES.INPUT_HELP_TEXT,
      fontStyle: 'italic',
    },
    rounded: {
      borderRadius: theme.SIZES.INPUT_ROUNDED,
    },
    borderless: {
      borderColor: 'transparent',
      borderWidth: 0,
    },
  });
export default withSocle(Input, styles);
