import React from 'react';
import {Image, ScrollView} from 'react-native';
import {
  Block,
  Text,
  NavBar,
  Button
} from './../../../../global/components/Socles';
import images from './../../../../global/components/images';
import style from './style';
import {DonneePersonnelle} from './../../../../global/static/data';

const Dump = ({navigation}) => (
  <>
    <NavBar
      title="DONNEES PERSONNELLES"
      left={
        <Button
        onlyIcon
        icon="navigate-before"
        iconFamily="ArgonExtra"
        iconSize={35}
        color="transparent"
        iconColor="#666666"
        onPress={() => navigation.navigate('Home')}
        style={{width: 40, height: 40}}>
        back
      </Button>
      }
      leftStyle={{paddingVertical: 12, flex: 0.2}}
    />
    <Block flex style={{marginHorizontal: 15}}>
      <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
        <Image
          style={{width: 150, height: 150}}
          source={images.logo.visioLogo}
        />
        <Text style={{fontSize: 26, fontWeight: 'bold', color: '#696969'}}>
          Données personnelles
        </Text>
        {DonneePersonnelle.map(donnee => (
          <Block row key={donnee.id} style={{marginVertical: 5}}>
            {donnee.titreGras !== '' && (
              <Text style={{fontWeight: 'bold', color: '#696969'}}>
                {donnee.titreGras}{' '}
              </Text>
            )}
            <Block flex>
              <Text>{donnee.Text}</Text>
            </Block>
          </Block>
        ))}
      </ScrollView>
    </Block>
  </>
);

export default Dump;
