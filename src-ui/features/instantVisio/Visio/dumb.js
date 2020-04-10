import React from 'react';
import {Text} from 'react-native';
import style from './style';

const Dump = ({navigation, videoCallIdProps}) => (
  <>
  {/** tu peux l'utiliser ici egalement**/}
    <Text>{videoCallIdProps}</Text>
  </>
);

export default Dump;
