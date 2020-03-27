import React from 'react';
import {Image} from 'react-native';
import {Block} from './../../../global/components/Socles';
import images from './../../../global/components/images';
import style from './style';

const Dump = ({navigation}) => (
  <>
    <Block flex style={style.center}>
      <Image style={{width: 200, height: 200}} source={images.logo.visioLogo} />
    </Block>
  </>
);

export default Dump;
